const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const families = require("./routes/api/families");
const chores = require("./routes/api/chores");
const Family = require("./models/Family");
const bodyParser = require("body-parser");
const passport = require('passport');
require('./config/passport')(passport);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("connected to mongo!"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(passport.initialize());

app.use("/api/families", families);
app.use("/api/chores", chores);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));