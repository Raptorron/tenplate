const db = require("./db");

const User = require("./models/User");
const Company = require("./models/Company");
const Offering = require("./models/Offering");
const Product = require("./models/Product");


const syncAndSeed = async () => {
  await db.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

///////////////////////////** 1 **///////////////////////////////////

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

////////////////////////////////** 2 **////////////////////

const products = [
  {
    name: "Action Figure",
    suggestedPrice: 15.5
  },
  {
    name: "Game Console",
    suggestedPrice: 250.99
  },
  {
    name: "Board Game",
    suggestedPrice: 17.3
  },
  {
    name: "Puzzle",
    suggestedPrice: 9.9
  },
  {
    name: "Speaker, Wireless",
    suggestedPrice: 85
  },
  {
    name: "Movie",
    suggestedPrice: 15.23
  },
]
const [ actionFigure, gameConsole, boardBame, puzzle, speaker, movie ] = await Promise.all(products.map(product => Product.create(product)))

const companies = [
  {
    name: "Target"
  },
  {
    name: "Walmart"
  },
  {
    name: "Best Buy"
  }
]
const [ target, walmart, bestBuy ] = await Promise.all(companies.map(company => Company.create(company)));

const offerings = [
  {
    price: 12,
    productId: actionFigure.id,
    companyId: target.id
  },
  {
    price: 10.5,
    productId: actionFigure.id,
    companyId: walmart.id
  },
  {
    price: 230.85,
    productId: gameConsole.id,
    companyId: target.id
  },
  {
    price: 240.5,
    productId: gameConsole.id,
    companyId: bestBuy.id
  },
  {
    price: 15.5,
    productId: boardBame.id,
    companyId: walmart.id
  },
  {
    price: 8.5,
    productId: puzzle.id,
    companyId: target.id
  },
  {
    price: 8,
    productId: puzzle.id,
    companyId: walmart.id
  },
  {
    price: 60.4,
    productId: speaker.id,
    companyId: target.id
  },
  {
    price: 65.89,
    productId: speaker.id,
    companyId: walmart.id
  },
  {
    price: 66.99,
    productId: speaker.id,
    companyId: bestBuy.id
  },
  {
    price: 14.2,
    productId: movie.id,
    companyId: walmart.id
  },
  {
    price: 15,
    productId: movie.id,
    companyId: bestBuy.id
  }
]
const [ offer1T, offer1W, offer2T, offer2B, offer3W, offer3T, offer4T, offer4W, offer5T, offer5W, offer6B, offer7W, offer7B ] = await Promise.all(offerings.map(offering => Offering.create(offering)))

};

//Must be activated for psql to work
//Must deactivate for the app to work

// syncAndSeed();


module.exports = syncAndSeed;
