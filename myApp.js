let express = require('express');
let app = express();



console.log("Hello World");

app.use("/public", express.static("public"));
app.use(logger);

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



function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();

}
























module.exports = app;
