let express = require('express');
let app = express();



console.log("Hello World");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    let apsolutePath = __dirname + "/views/index.html";
    res.sendFile(apsolutePath);
});

app.get("/json", (req, res) => res.json({ "message": "Hello json" }));




























module.exports = app;
