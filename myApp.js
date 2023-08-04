let express = require('express');
let app = express();



console.log("Hello World");

const staticDir = __dirname + "/public/";
app.use(express.static(staticDir));

app.get("/", (req, res) => {
    let apsolutePath = __dirname + "/views/index.html";
    res.sendFile(apsolutePath);
});






























module.exports = app;
