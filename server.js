const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const cookieSession = require("cookie-session");

// var corsOptions = {
//     origin: ["https://eat-happy-inventur.herokuapp.com", "http://localhost:4200"],
//     credentials: true
// };

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', "https://eat-happy-inventur.herokuapp.com");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'x-access-token,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

var corsOptions = {
    origin: "https://eat-happy-inventur.herokuapp.com"
};

app.use(cors(corsOptions));

// const cookieSessionMiddleware = cookieSession({
//     secret: `I'm wondering...`,
//     maxAge: null
// });

// app.use(cookieSessionMiddleware);

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my first Angular project. I'm glad that it's served as inventory-app for Eat Happy Sushi Shop! I will work even harder to achieve what I want." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/inventory.routes")(app);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log("here2", process.env)
    console.log(`Server is running on port ${PORT}.`);
});
