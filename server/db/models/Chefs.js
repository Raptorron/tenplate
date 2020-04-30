const Sequelize = require('sequelize');
const {STRING, UUID, UUIDV4, ENUM, TEXT, DECIMAL, INTEGER} = Sequelize;
const db = require('../db');

////////////////////////** 3 **//////////////////////////////////////////////

const Chef = db.define('chef', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  chefName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    unique: true
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  chefScore: {
    type: INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://image.shutterstock.com/z/stock-vector-smiling-chef-cartoon-character-holding-silver-platter-754199197.jpg'
  }
});

module.exports = Chef
