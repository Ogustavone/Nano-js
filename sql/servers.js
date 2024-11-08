const Sequelize = require('sequelize');
const database = require('./db.js');

const Servers = database.define('servers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  server_id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  server_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  server_roles: {
    type: Sequelize.JSON,
    allowNull: false
  },
  total_users: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userjoinChannel: {
    type: Sequelize.STRING
  },
  joinRole: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Servers;