// *<-- IMPORTS
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const tanks = require("./routes/api/tanks");
const logs = require("./routes/api/logs");
const path = require('path');
// -->*

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// *<-- DATABASE CONNECTION
mongoose
  .connect(db, { userNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
// -->*

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// <-- BACKEND ROUTES
app.use("/api/users", users);
app.use("/api/tanks", tanks);
app.use("/api/logs", logs)
// -->