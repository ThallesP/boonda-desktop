import { createClient as createSupabaseClient } from "@supabase/supabase-js";
export const createClient = () =>
  createSupabaseClient(
    "https://dagrxagqkexvgylcbiqz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZ3J4YWdxa2V4dmd5bGNiaXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODYwNDYsImV4cCI6MjAyODg2MjA0Nn0.VACjQ4rzyKtJMamkkErkfCT8Sj1WOA-U6bO25URpOQ4"
  );
