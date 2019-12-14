const Sequelize = require("sequelize");
const db = require("../dao/db");

module.exports = db.sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    token: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  { timestamps: false }
);
