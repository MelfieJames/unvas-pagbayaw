import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase"; // ✅ Updated path

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);
