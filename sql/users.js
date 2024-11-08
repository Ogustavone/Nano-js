const Sequelize = require('sequelize');
const database = require('./db.js');

const Users = database.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  global_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  exp_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Users;