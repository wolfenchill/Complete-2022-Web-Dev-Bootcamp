const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=96e3eb63ff83a6ebfbaf48fe909c248f";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            console.log(data);
        });
        res.send("Server is up and running.");
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});