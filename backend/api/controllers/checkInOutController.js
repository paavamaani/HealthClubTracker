const CheckInOut = require('../models/CheckInOut');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Check In Out individual
 */
exports.checkInOut = (request, response) => {    
    const newCheckin = new CheckInOut({
        email: request.body.email,
        checkin_time: new Date(request.body.checkin),
        checkout_time: new Date(request.body.checkout),
        hours_worked: request.body.total
    });
      
    newCheckin.save()
    .then(document => {
        console.log("Successfully saved details in DB in checkInOut", document);
        
        response.status(200).json(document);
    })
    .catch(error => {
        console.log("Error saving details in DB in checkInOut", error);
        
        response.status(500).json(error);
    });
};