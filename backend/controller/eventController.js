const Event = require('../models/Event');
const multer = require('multer');
const cloudinary = require('../cloudinaryConfig');

// Multer Configuration for Cloudinary
const storage = multer.diskStorage({});
const upload = multer({ storage });

/**
 * 📌 Create a new event with empty images
 */
exports.createEvent = async (req, res) => {
    try {
        const { eventname, eventcode, password } = req.body;

        // Check if event already exists
        let existingEvent = await Event.findOne({ eventcode });

        if (existingEvent) {
            return res.status(400).json({ error: "Event with this code already exists" });
        }

        // Create new event
        const event = new Event({
            eventname,
            eventcode,
            password,
            images: []  // Empty images array
        });

        await event.save();
        res.status(201).json({ message: "Event created successfully", data: event });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

/**
 * 📌 Retrieve Images by Event Code & Password
 */
/**
 * 📌 Retrieve Images by Event Code & Password
 */
exports.getImagesByEventCodeAndPassword = async (req, res) => {
    try {
        const { eventcode, password } = req.body;

        // Find the event with matching eventcode and password
        const event = await Event.findOne({ eventcode, password });

        if (!event) {
            return res.status(401).json({ error: "Invalid event code or password" });
        }

        res.json({ images: event.images });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};


/**
 * 📌 Upload Image and Store Event Details
 */
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


/**
 * 📌 Upload Image using Team Code & Password
 */
exports.uploadImageByTeamCode = async (req, res) => {
    try {
        const { teamcode, password } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Find event with matching teamcode and password
        let event = await Event.findOne({ eventcode: teamcode, password });

        if (!event) {
            return res.status(401).json({ error: "Invalid teamcode or password" });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Add image to the event
        event.images.push({ url: result.secure_url });

        await event.save();
        res.status(201).json({ message: "Image uploaded successfully", data: event });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

/**
 * 📌 Retrieve Images by Event Code
 */
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

// Export multer middleware
exports.upload = upload.single('image');
