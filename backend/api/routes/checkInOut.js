const express = require('express');

const checkInOutController = require('../controllers/checkInOutController');

const router = express.Router();

router.post('/', (request, response, next) => {
    console.log("Route to checkInOut", request.body);
    
    checkInOutController.checkInOut(request, response);
});

module.exports = router;