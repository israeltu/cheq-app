const express = require("express");
const app = express();
const keywordlists = require("./routes/keywordlists_route");
const vasts = require("./routes/vasts_route");
const { users } = require("./routes/users_route");
const cors = require("cors");
const KeywordList = require("./model/Keywordlist");
const User = require("./model/User");
const Vast = require("./model/Vast");

const Sequelize = require("sequelize");
const db = require("./dao/db");

app.use(cors());
app.use(express.json()); //middleware
app.use("/api/keywordlists", keywordlists);
app.use("/api/vasts", vasts);
app.use("/api/users", users);

//Define a PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//Check Connection to our db
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to db has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//create tables if thet don't exist
//KeywordList.sync({force:false});
//Vast.sync({force:false});
User.sync({ force: false });
