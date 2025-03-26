const express = require('express');
const {
    createEvent,
    uploadImage,
    uploadImageByTeamCode,
    getImagesByEventCode,
    getImagesByEventCodeAndPassword,
    upload
} = require('../controller/eventController');

const router = express.Router();

router.post('/create', createEvent);
router.post('/upload', upload, uploadImage);
router.post('/uploadByTeam', upload, uploadImageByTeamCode);
router.get('/images/:eventcode', getImagesByEventCode);
router.post('/imagesByEvent', getImagesByEventCodeAndPassword);  // New route

module.exports = router;
