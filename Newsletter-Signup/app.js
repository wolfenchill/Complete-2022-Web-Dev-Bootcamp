const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    console.log("received");
});