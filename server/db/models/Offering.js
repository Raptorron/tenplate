const Sequelize = require('sequelize');
const { DataTypes, DECIMAL } = Sequelize;
const db = require('../db');

////////////////////////////////** 2 **////////////////////


const Offering = db.define('offering', {
  price: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      isDecimal: true
    }
  }
});

module.exports = Offering;
