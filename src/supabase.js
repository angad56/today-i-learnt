import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://chtyeljiacjadkssybez.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodHllbGppYWNqYWRrc3N5YmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0MzMxNzUsImV4cCI6MTk4NzAwOTE3NX0.-6aCoH8Fogmill7up4o1NkqLXxHM5F94HVNOz2yufrk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
