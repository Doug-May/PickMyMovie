const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const user = require("./routes/api/user.js");

//initialize the express app
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors middleware
app.use(cors());

//use routes from express router
app.use("/api/user", user);

// Middleware for serving up the clientside Vue App
app.use(serveStatic(__dirname + "/client/dist"));

// Start up the server
const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});