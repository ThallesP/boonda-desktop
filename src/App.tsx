import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
function App() {
  const client = createClient(
    "https://dagrxagqkexvgylcbiqz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZ3J4YWdxa2V4dmd5bGNiaXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODYwNDYsImV4cCI6MjAyODg2MjA0Nn0.VACjQ4rzyKtJMamkkErkfCT8Sj1WOA-U6bO25URpOQ4"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          const { data } = await client.auth.signInWithPassword({
            email,
            password,
          });

          console.log(data);
        }}
      >
        Sign In
      </button>
    </div>
  );
}

export default App;
