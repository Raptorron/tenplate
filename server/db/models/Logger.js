const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;
const db = require('../db');

///////////////////////////** 1 **///////////////////////////////////

const Logger = db.define('logger', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  loggerName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: STRING,
    allowNull: false
  }
});

module.exports = Logger;
