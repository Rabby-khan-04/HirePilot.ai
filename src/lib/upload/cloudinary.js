export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "resume_upload");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/raw/upload`,
    { method: "POST", body: formData },
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Upload filed");
  }
  return data.secure_url;
};
