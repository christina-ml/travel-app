const express = require("express");
const places = express.Router();

const { getAllPlaces, getOnePlace } = require("../queries/places.js");

places.get("/", async (req, res) => {
    try {
        const allPlaces = await getAllPlaces();
        /* if there's something at position 0, then I want to respond with status of 200, and return json of all the places */
        if (allPlaces[0]){
            res.status(200).json(allPlaces);
        } else {
            res.status(500).json({ error: "No data returned from db" });
        }
    } catch(error) {
        console.log(error);
    }
})

/* New endpoint - for getOnePlace */
places.get("/:id", async (req, res)=>{
    /* Get the id, so we can pass it to `getOnePlace` */
    const { id } = req.params;
    try{
        const place = await getOnePlace(id);
        if(place.id){
            res.status(200).json(place);
        } else {
            res.status(500).json({error: "Place was not returned from the db"});
        }
    } catch(err){
        console.log(err);
    }
})

module.exports = places;