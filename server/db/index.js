const db = require('./db');

const User = require('./models/User');

const syncAndSeed = require('./syncAndSeed');

// Associations go here
// Order.belongsTo(User);
// User.hasMany(Order);

// LineItem.belongsTo(Order);
// Order.hasMany(LineItem);

// LineItem.belongsTo(Product);
// Product.hasMany(LineItem);



module.exports = {
  syncAndSeed,
  db,
  User,
};
