const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=96e3eb63ff83a6ebfbaf48fe909c248f&units=imperial";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(temp);
            const description = weatherData.weather[0].description;
            console.log(description);
            const icon = weatherData.weather[0].icon;
            const displayTemp =
                "<h1>The temperature in London is " + temp + " degrees Fahrenheit</h1>";
            const displayDescription =
                "<h1>The weather is currently " + description + "</h1>";

            const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write(displayTemp);
            res.write(displayDescription);
            res.write(`<img src = ${imgURL}>`);
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});