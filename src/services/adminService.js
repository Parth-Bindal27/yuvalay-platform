import { supabase } from "../lib/supabase";

export const checkAdmin = async (email) => {
  const { data, error } = await supabase
    .from("admins")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  console.log("Supabase:", { data, error });

  if (error) {
    return null;
  }

  return data;
};