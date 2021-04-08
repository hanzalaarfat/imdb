const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
require("./app/routes/turorial.routes")(app);
app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(express.json());
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
