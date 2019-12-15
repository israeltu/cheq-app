const express = require("express");
const users = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Register user
users.post("/register", (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then(async user => {
      if (user)
        return res
          .status(400)
          .send(
            "Registration failed: Email already exists on the system, please use a different email"
          );
      else {
        try {
          const hashedPassword = await bcrypt.hash(req.body.password, 10); //adding salt
          const newUser = {
            email: req.body.email,
            password: hashedPassword,
            idLoggedIn: false
          };
          User.create(newUser).then(() =>
            res.status(200).send("Registration completed succesfully")
          );
        } catch {
          res.status(500);
        }
      }
    })
    .catch(() => res.status(400));
});

//User login
users.post("/login", (req, res) => {
  //User Authentication
  User.findOne({ where: { email: req.body.email } })
    .then(async user => {
      if (!user)
        return res
          .status(400)
          .send("wrong email address or email does not exist");
      try {
        if (await bcrypt.compare(req.body.password, user.password)) {
          console.log("password ok");
          const tempUser = {
            email: user.email,
            password: user.password,
            isLoggedIn: true
          };
          console.log(user.dataValues);
          //JWT-generate user access token
          const accessToken = jwt.sign(
            { email: req.body.email, id: user.id },
            process.env.ACCESS_TOKEN_SECRET
          );
          User.update(tempUser, { where: { id: user.id } }).then(
            rowsUpdated => {
              if (rowsUpdated) {
                console.log(accessToken);
                return res.json({ accessToken: accessToken });
              } //send JWT to the user
            }
          );
        } else {
          res.status(401).send("Wrong password");
        }
      } catch {
        res.status(500);
      }
    })
    .catch(() => res.status(400));
});

//User logout
users.delete("/logout", authenticateToken, (req, res) => {
  console.log(req);
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      const tempUser = {
        email: user.email,
        password: user.password,
        isLoggedIn: false
      };
      console.log("here");
      User.update(tempUser, { where: { email: req.body.email } }).then(
        rowsUpdated => {
          if (rowsUpdated) return res.status(200).send("Logout successfully");
        }
      );
    })
    .catch(() => res.status(400));
});

//middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const reqToken = authHeader && authHeader.split(" ")[1]; //check if token attached to header
  if (!reqToken) return res.status(401).send("no access-token is missing"); //no access-token is missing
  jwt.verify(reqToken, process.env.ACCESS_TOKEN_SECRET, (err, { email }) => {
    if (err) return res.status(403).send("no access-token is invalid");
    //no access-token is invalid
    else {
      req.body.email = email;
      next();
    }
  });
}

module.exports.users = users;
module.exports.authenticateToken = authenticateToken;
