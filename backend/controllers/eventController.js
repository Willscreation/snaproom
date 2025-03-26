const Event = require('../models/Event');
const multer = require('multer');
const cloudinary = require('../cloudinaryConfig');

// Multer Configuration for Cloudinary
const storage = multer.diskStorage({});
const upload = multer({ storage });

// 📌 Upload Image and Store Event Details
exports.uploadImage = async (req, res) => {
    try {
        const { eventname, eventcode, password } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Check if event exists
        let event = await Event.findOne({ eventcode });

        if (!event) {
            event = new Event({ eventname, eventcode, password, images: [] });
        }

        // Add image to event
        event.images.push({ url: result.secure_url });

        await event.save();
        res.status(201).json({ message: "Image uploaded successfully", data: event });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

// 📌 Retrieve Images by Event Code
exports.getImagesByEventCode = async (req, res) => {
    try {
        const { eventcode } = req.params;
        const event = await Event.findOne({ eventcode });

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.json({ images: event.images });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

// 📌 Export multer middleware
exports.upload = upload.single('image');
