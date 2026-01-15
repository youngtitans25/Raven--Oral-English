declare const Deno: any;

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Environment variables (Deno Deploy)
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Service Endpoints (In a real deployment, these might be other function URLs)
// For monolithic Deno deployment, these could be imports.
const SERVICES = {
  IDENTITY: "/api/v1/identity",
  LEARNING: "/api/v1/learning",
  BILLING: "/api/v1/billing",
  SOCIAL: "/api/v1/social",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname;

    // 1. JWT Validation Layer
    // We check if the user is authenticated before routing to protected services
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing Authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return new Response(JSON.stringify({ error: "Invalid Token" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Routing Logic
    // Entitlement checks (Billing) would happen here before forwarding
    
    if (path.startsWith(SERVICES.LEARNING)) {
        // Proxy to Learning Service Logic
        return await handleLearningRequest(req, path, user);
    }
    
    if (path.startsWith(SERVICES.BILLING)) {
        // Proxy to Billing Service Logic
        return await handleBillingRequest(req, path, user);
    }

    return new Response(JSON.stringify({ message: "Gateway: Route not found" }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// Mock Handler for Learning Service (LMS)
// In a full microservices setup, this would fetch() another URL.
async function handleLearningRequest(req: Request, path: string, user: any) {
    // Example: POST /api/v1/learning/sessions
    if (path.endsWith("/sessions") && req.method === "POST") {
        const body = await req.json();
        
        // Direct DB access via Service Role (simulating the trusted backend service)
        const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
        
        const { data, error } = await supabaseAdmin
            .from('learning.sessions') // Accessing the schema defined in SQL
            .insert({
                student_id: user.id,
                subject_id: body.subject,
                topic: body.topic,
                status: 'active'
            })
            .select()
            .single();

        if (error) throw error;
        
        return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
    }

    return new Response(JSON.stringify({ message: "LMS endpoint not implemented" }), { headers: corsHeaders });
}

async function handleBillingRequest(req: Request, path: string, user: any) {
    return new Response(JSON.stringify({ status: "ok", service: "TBS" }), { headers: corsHeaders });
}