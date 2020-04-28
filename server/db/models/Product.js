const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, DataTypes } = Sequelize;
const db = require('../db');

////////////////////////////////** 2 **////////////////////


const Product = db.define('product', {
  id:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name:{
    type: STRING,
    unique: true,
    allowNull: false
  },
  suggestedPrice: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      isDecimal: true
    }
  }
});

module.exports = Product;
