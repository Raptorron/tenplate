const Sequelize = require('sequelize');
const {STRING, UUID, UUIDV4, ENUM, TEXT, DECIMAL, INTEGER} = Sequelize;
const db = require('../db');

////////////////////////** 3 **//////////////////////////////////////////////

const Recipe = db.define('recipe', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cuisine: {
    type: ENUM('American', 'Europian', 'South American', 'Asian')
  },
  directions: TEXT,
  healthScore: DECIMAL,
  ingredients: {
    type: TEXT
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://lovefoodhatewaste.ca/wp-content/uploads/2018/06/FoodBackground.jpg'
  }
});

module.exports = Recipe
