import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/constants";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
export const createClient = () =>
  createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
