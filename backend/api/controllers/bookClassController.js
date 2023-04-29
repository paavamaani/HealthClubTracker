const Booking = require('../models/Booking');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Book Class 
 */
exports.bookClass = (request, response) => {
    const bookingDetails = new Booking({
        email: request.body.email,
        time: request.body.time
      });
    
    bookingDetails.save()
    .then(documents => {
        console.log("Successfully saved in DB in bookClass", documents);
        
        response.status(200).json(documents);
    })
    .catch(error => {
        console.log("Error saving in DB in bookClass", error);
        
        response.status(500).json(error);
    });
};