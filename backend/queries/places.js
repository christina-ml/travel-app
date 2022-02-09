const db = require("../db/dbConfig");

// create a function, and grab 
// add a listener to it
const getAllPlaces = async () => {
    try {
        /* wait until it gets the information from our database */
        const allPlaces = await db.any("SELECT * FROM places");
        return allPlaces;
    } catch(error) {
        return error;
    }
}

module.exports = {
    getAllPlaces,
}