const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS
const connectDB = require("./config");
const eventRoutes = require("./routes/eventRoutes");

dotenv.config();
const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

// ✅ Allow JSON & URL Encoded Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to Database
connectDB();

// ✅ Routes
app.use("/api/events", eventRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
