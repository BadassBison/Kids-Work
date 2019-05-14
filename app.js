const express = require("express");
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const families = require("./routes/api/families");
const children = require("./routes/api/children");
const chores = require("./routes/api/chores");
const payments = require("./routes/api/payments");
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
app.use("/api/children", children);
app.use("/api/chores", chores);
app.use("/api/payments", payments);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));