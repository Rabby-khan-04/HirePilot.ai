"use client";
import { useState } from "react";

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    // Validate PDF
    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    // Validate size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size must be under 5MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);

      // Replace with your Cloudinary unsigned upload preset
      formData.append("upload_preset", "resume_upload");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbqnd8i6z/raw/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      setPdfUrl(data.secure_url);
      console.log(data);
      console.log("Uploaded PDF URL:", data.secure_url);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md space-y-4 rounded-2xl border p-6 shadow">
      <h2 className="text-xl font-semibold">Upload Resume PDF</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="block w-full text-sm"
      />

      {file && (
        <div className="rounded-lg bg-gray-100 p-3 text-sm">
          <p>
            <span className="font-medium">File:</span> {file.name}
          </p>
          <p>
            <span className="font-medium">Size:</span>{" "}
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="rounded-xl bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload PDF"}
      </button>

      {pdfUrl && (
        <div className="space-y-2 rounded-lg bg-green-100 p-3">
          <p className="text-sm font-medium text-green-700">
            Upload Successful
          </p>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-sm text-blue-600 underline"
          >
            View Uploaded PDF
          </a>
        </div>
      )}
    </div>
  );
}
