import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageDisplay = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events/images/6600");
      setImages(response.data.images || []);
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Uploaded Images</h2>

      {loading ? (
        <p className="text-center">Loading images...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : images.length === 0 ? (
        <p className="text-center">No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img._id} className="border p-2 rounded shadow-md">
              <img src={img.url} alt="Uploaded" className="w-full h-40 object-cover rounded" />
              <p className="text-sm text-gray-600 mt-2">
                Uploaded on: {new Date(img.timestamps).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
