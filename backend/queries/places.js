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

const getOnePlace = async(id)=>{
    try{
        const place = await db.one("SELECT * FROM places WHERE id=$1", id);
        return place;
    }catch(error){
        return error;
    }
}
module.exports = {
    getAllPlaces,
    getOnePlace
}