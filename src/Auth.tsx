import { AuthForm } from "@/components/auth-form";
import { createClient } from "@supabase/supabase-js";

export default async function SignIn() {
  const supabase = createClient(
    "https://dagrxagqkexvgylcbiqz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZ3J4YWdxa2V4dmd5bGNiaXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODYwNDYsImV4cCI6MjAyODg2MjA0Nn0.VACjQ4rzyKtJMamkkErkfCT8Sj1WOA-U6bO25URpOQ4"
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex w-full justify-center items-center flex-1">
      <AuthForm intent="sign-in" />
    </div>
  );
}
