let express = require('express');
let app = express();



console.log("Hello World");

app.use(express.static("public"));

app.get("/", (req, res) => {
    let apsolutePath = __dirname + "/views/index.html";
    res.sendFile(apsolutePath);
});






























module.exports = app;
