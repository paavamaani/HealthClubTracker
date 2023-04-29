const FreeTrial = require('../models/FreeTrial');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Free trial new members
 */
exports.freeTrial = (request, response) => {    
    const newFreeTrial = new FreeTrial({
        email: request.body.email,
        password: request.body.password
    });

    newFreeTrial.save()
    .then(documents => {
        console.log("Successfully saved details in DB in freeTrial", documents);
        
        response.status(200).json(documents);
    })
    .catch(error => {
        console.log("Error saving details in DB in freeTrial", error);
        
        response.status(500).json(error);
    });
};