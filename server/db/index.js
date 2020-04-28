const db = require('./db');

const User = require('./models/User');
const Product = require("./models/Product");
const Company = require("./models/Company");
const Offering = require("./models/Offering");

const syncAndSeed = require('./syncAndSeed');

// Associations go here

////////////////////////////////** 2 **////////////////////

Offering.belongsTo(Product);
Product.hasMany(Offering);

Offering.belongsTo(Company);
Company.hasMany(Offering);


module.exports = {
  syncAndSeed,
  db,
  models: {
    User,
    Product,
    Company,
    Offering
  }
};
