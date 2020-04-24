const db = require("./db");

const User = require("./models/User");


const syncAndSeed = async () => {
  await db.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

  const users = [
    {
      name: 'Matthew Lang'
    },
    {
      name: 'Tyler Romero'
    },
    {
      name: 'Patrick Taylor'
    }
  ]
  const [matthew, tyler, patrick] = await Promise.all(users.map(user => User.create(user)));
};

module.exports = syncAndSeed;
