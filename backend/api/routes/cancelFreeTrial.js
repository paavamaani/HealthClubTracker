const express = require('express');

const cancelFreeTrialController = require('../controllers/cancelFreeTrialController');

const router = express.Router();

router.post('/', (request, response, next) => {
    console.log("Route to cancelFreeTrial", request.body);
    
    cancelFreeTrialController.cancelFreeTrial(request, response);
});

module.exports = router;