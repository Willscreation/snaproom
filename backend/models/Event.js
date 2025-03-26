const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventname: { type: String, required: true },
    eventcode: { type: Number, unique: true, required: true },
    password: { type: String, required: true },
    images: [
        {
            url: { type: String, required: true },
            timestamps: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Event', eventSchema);
