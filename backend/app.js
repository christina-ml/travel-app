// Dependencies
const express = require("express");

// Configuration
const app = express();

// Injecting cors middleware
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res)=> {
    res.send("<h1>Welcome to our travel app</h1>");
})

// Export
module.exports = app;