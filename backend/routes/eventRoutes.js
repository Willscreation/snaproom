const express = require('express');
const { uploadImage, getImagesByEventCode, upload } = require('../controllers/eventController');


const router = express.Router();

router.post('/upload', upload, uploadImage);
router.get('/images/:eventcode', getImagesByEventCode);

module.exports = router;