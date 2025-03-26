import React, { useState } from "react";
import axios from "axios";

const CheckEvent = () => {
  const [eventCode, setEventCode] = useState("0000");
  const [password, setPassword] = useState("0000");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5000/api/events/imagesByEvent", {
        eventcode: eventCode,
        password: password,
      });
      setImages(response.data.images);
    } catch (err) {
      setError("Failed to fetch images. Please check credentials and try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Check Event Images</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Code"
          value={eventCode}
          onChange={(e) => setEventCode(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={fetchImages}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Fetch Images
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <img
            key={image._id}
            src={image.url}
            alt="Event"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default CheckEvent;
