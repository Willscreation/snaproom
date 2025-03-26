import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/styles/ImageUploader.css"; // Import your CSS file for styling



const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const eventCode = 6600; // Fixed event code

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/events/images/${eventCode}`);
      setUploadedImages(response.data.images || []);
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("eventname", "Team 6600");
    formData.append("eventcode", eventCode);
    formData.append("password", "securepassword");

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/events/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Image uploaded successfully!");
      setImage(null);
      fetchImages(); // Refresh images
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload & View Images (Team 6600)</h2>

      {/* Image Upload Form */}
      <div className="mb-6 text-center">
        <input type="file" onChange={handleFileChange} className="border p-2 rounded" required />
        <button
          type="submit"
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Display Uploaded Images */}
      <h3 className="text-xl font-semibold mb-3">Uploaded Images:</h3>
      {loading ? (
        <p>Loading images...</p>
      ) : uploadedImages.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {uploadedImages.map((img) => (
            <div key={img._id} className="border p-2 rounded">
              <img src={img.url} alt="Uploaded" className="w-full h-40 object-cover rounded" />
              <p className="text-sm text-gray-600 mt-2">
                Uploaded on: {new Date(img.timestamps).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ImageUploader;
