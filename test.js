let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", function(req, res) {
    res.send(`
    <form action ="/answer" method = "POST">
    <p>What color is the sky on a clear and a sunny day</p>
    <input name="SkyColor" autocomplete ="off">
    <button>Submit Answer</button>
    </form>
    `);
});

ourApp.post("/answer", function(req, res) {
    if (req.body.Skycolor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Awesome,You got it right</>
        <a href = "/">Back to homepage<a/>
        `);
    } else {
        res.send(`
        <p>Sorry,You got it wrong</>
        <a href = "/">Back to homepage<a/>
        `);
    }
});

ourApp.get("/answer", function(req, res) {
    res.send("You must be lost");
});

ourApp.listen(3000);