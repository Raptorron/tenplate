const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, ENUM, TEXT, DECIMAL, INTEGER, BOOLEAN, DataTypes }= Sequelize;
const conn = new Sequelize(process.env.DATTABASE_URL || 'postgres://localhost/template_db');

const User = conn.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }
});

//_____.belongsTo(User);
//User.hasMany(______);
// for relationships for the different models

const syncAndSeed = async () => {
  await conn.sync({force: true});

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
}

// syncAndSeed();

module.exports = {
  syncAndSeed,
  models: {
    User
  }
}
