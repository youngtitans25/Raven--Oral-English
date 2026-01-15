import { supabase } from "../lib/supabase";

const GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:54321/functions/v1/gateway'; // Default to local supabase edge function

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

/**
 * Centralized Fetch Wrapper for Microservices Architecture.
 * Automatically attaches the Supabase JWT for Gateway validation.
 */
export async function apiRequest<T>(
  endpoint: string, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any
): Promise<ApiResponse<T>> {
  
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token;

  if (!token) {
    return { data: null, error: "Unauthorized: No active session" };
  }

  try {
    const response = await fetch(`${GATEWAY_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        const errorData = await response.json();
        return { data: null, error: errorData.error || `Error ${response.status}` };
    }

    const data = await response.json();
    return { data, error: null };

  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
}
