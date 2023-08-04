let express = require('express');
let app = express();



console.log("Hello World");

app.get("/", (req, res) => {
    let apsolutePath = __dirname + "/views/index.html";
    res.sendFile(apsolutePath);
});






























module.exports = app;
