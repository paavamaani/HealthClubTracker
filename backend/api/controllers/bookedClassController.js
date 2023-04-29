const Booking = require('../models/Booking');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Fetch booked class schedules for individual
 */
exports.bookedClass = (request, response) => {    
    Booking.find({ email: request.body.email })
    .select('time')
    .then(bookings => {
        const documents = bookings.map(booking => booking.time);
        
        console.log("Successfully fetched details from DB in bookedClass", documents);
        
        response.status(200).json(documents);
    })
    .catch(error => {
        console.log("Error fetching details from DB in bookedClass", error);
        
        response.status(500).json(error);
    });
};