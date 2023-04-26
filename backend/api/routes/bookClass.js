const express = require('express');

const bookClassController = require('../controllers/bookClassController');

const router = express.Router();

router.post('/', (request, response, next) => {
    console.log("Route to booking", request.body);
    
    bookClassController.bookClass(request, response);
});

module.exports = router;