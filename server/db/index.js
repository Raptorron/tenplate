const db = require('./db');

const User = require('./models/User');
const Product = require("./models/Product");
const Company = require("./models/Company");
const Offering = require("./models/Offering");
const Recipe = require('./models/Recipe');
const Chef = require('./models/Chefs');

const syncAndSeed = require('./syncAndSeed');

// Associations go here

////////////////////////////////** 2 **////////////////////

Offering.belongsTo(Product);
Product.hasMany(Offering);

Offering.belongsTo(Company);
Company.hasMany(Offering);

//////////////////////////** 3 **/////////////////////////////////////////

Recipe.belongsTo(Chef);
Chef.hasMany(Recipe);

module.exports = {
  syncAndSeed,
  db,
  models: {
    //1//
    User,
    //2//
    Product,
    Company,
    Offering,
    //3//
    Chef,
    Recipe
  }
};
