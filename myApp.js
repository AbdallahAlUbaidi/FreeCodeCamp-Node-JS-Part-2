let express = require('express');
const bodyParser = require("body-parser");
let app = express();



console.log("Hello World");

app.use("/public", express.static("public"));
app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    let apsolutePath = __dirname + "/views/index.html";
    res.sendFile(apsolutePath);
});

app.get("/json", (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE.toLowerCase();
    let message = "Hello json"
    if (messageStyle === "uppercase") message = message.toUpperCase();
    res.json({ message });
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
});

function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();

}
























module.exports = app;
