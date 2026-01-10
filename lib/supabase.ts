import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kwicenbmgllolchbrjve.supabase.co';
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aWNlbmJtZ2xsb2xjaGJyanZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDk2OTQsImV4cCI6MjA4MDYyNTY5NH0.UL1NvX0lZaeX9QVb9bBTkjLrhd0XMeAwei-v8-7FVnc';

// Helper to determine redirect URL
export const getRedirectUrl = () => {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return '';
};

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
    }
});