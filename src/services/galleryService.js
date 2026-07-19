import { supabase } from "../lib/supabase";

const BUCKET = "gallery";

export const uploadImage = async (
  file,
  title,
  caption,
  category,
  featured,
  uploadedBy
) => {

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${extension}`;

  console.log("Step 1: Uploading to Storage");

  const { data: uploadData, error: uploadError } =
    await supabase.storage
      .from(BUCKET)
      .upload(fileName, file);

  console.log("Storage Result:", uploadData);
  console.log("Storage Error:", uploadError);

  if (uploadError) throw uploadError;

  const { data: publicData } =
    supabase.storage
      .from(BUCKET)
      .getPublicUrl(fileName);

  console.log("Public URL:", publicData.publicUrl);

  console.log("Step 2: Inserting into gallery table");

  const { data, error } = await supabase
    .from("gallery")
    .insert([
      {
        title,
        caption,
        category,
        image_url: publicData.publicUrl,
        featured,
        uploaded_by: uploadedBy,
      },
    ])
    .select();

  console.log("Database Result:", data);
  console.log("Database Error:", error);

  if (error) throw error;
};

export const getGallery = async () => {

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

export const deleteImage = async (id, imageUrl) => {

  const fileName = imageUrl.split("/").pop();

  await supabase.storage
    .from(BUCKET)
    .remove([fileName]);

  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) throw error;
};