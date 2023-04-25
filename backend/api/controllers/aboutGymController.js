const aboutGym = require('../models/aboutGym');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Fetch flight arrivals and departures based on city 
 */
exports.aboutGymInformation = (request, response) => {
    aboutGym.find({"info.cities.city": request.params.city}, {"info.memberships": 1, "info.cities.$": 1})
    .exec()
    .then(documents => {
        console.log("Success fetching about gym in aboutGymInformation", documents);
        
        response.status(200).json(documents);
    })
    .catch(error => {
        console.log("Success fetching about gym in aboutGymInformation", error);
        
        response.status(500).json(error);
    });
};