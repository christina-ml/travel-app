const express = require("express");
const places = express.Router();

const { getAllPlaces } = require("../queries/places.js");

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

module.exports = places;