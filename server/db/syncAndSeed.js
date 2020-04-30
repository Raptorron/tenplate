const db = require("./db");

const User = require("./models/User");
const Company = require("./models/Company");
const Offering = require("./models/Offering");
const Product = require("./models/Product");
const Recipe = require("./models/Recipe");
const Chef = require("./models/Chefs");



const syncAndSeed = async () => {
  await db.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

///////////////////////////** 1 **///////////////////////////////////

  const users = [
    {
      name: 'Matthew',
      email: 'matthew@gmail.com',
      password: 'MATTHEW'
    },
    {
      name: 'Tyler',
      email: 'tyler@gmail.com',
      password: 'TYLER'
    },
    {
      name: 'Patrick',
      email: 'patrick@gmail.com',
      password: 'PATRICK'
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

//////////////////////////** 3 **////////////////////////////////////////

const chefs = [
  {chefName: 'Billy Hill', email: 'bHill@yahoo.com', chefScore: 7, imageUrl:'https://image.freepik.com/free-vector/cartoon-male-chef_119631-187.jpg'},
  {chefName: 'Mandy Talor', email: 'mTalor@gmail.com', chefScore: 5, imageUrl: 'https://image.shutterstock.com/image-vector/cartoon-cute-little-blond-girl-260nw-749802838.jpg'},
  {chefName: 'John Ford', email: 'jFord@gmail.com', chefScore: 9, imageUrl: 'https://media.istockphoto.com/vectors/cartoon-fat-male-chef-vector-id944431288'},
  {chefName: 'Anna Lane', email: 'aLane@yahoo.com', chefScore: 6, imageUrl: 'https://friendlystock.com/wp-content/uploads/2019/05/8-female-chef-pointing-to-the-side-cartoon-clipart.jpg'}
]
const [billy, mandy, john, anna] = await Promise.all(chefs.map(chef => Chef.create(chef)));

const recipes = [
  {name: 'Hamburger', cuisine: 'American', directions: 'Divide the ground beef, Shape the patties, Warm the pan,Toast the buns, Increase the heat to medium-high, Cook the burgers for 3 to 5 minutes, Flip the burgers and cook another 3 to 5 minutes,', healthScore: 5, ingredients: 'Buns, 100% ground-beef, lettice, tomato, pickles, onions', imageUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg', chefId: billy.id},
  {name: 'Deep-Dish Pizza', cuisine: 'American', directions: '1 Mix sugar, yeast and 11 ounces room temperature water (about 80 degrees) in a bowl and let bloom for 15 minutes. Combine flour, salt and cream of tartar in the bowl of a stand mixer. Once yeast has bloomed, add to dry ingredients along with corn oil. Gently combine with a rubber spatula until a rough ball is formed. 2 Knead on low speed with the dough hook for 90 seconds. Transfer to a lightly oiled bowl and proof until doubled in size, about 6 hours. Punch down and let dough settle for 15 more minutes. 3 Position an oven rack in the middle of the oven and preheat to 450 degrees F. 4 Coat bottom and sides of a 12-inch cake pan or traditional Chicago style pizza pan with melted butter. Using your hands, spread out about three-quarters of the dough across the bottom and up the sides of the pan (save the remainder for another use). Cover entire bottom in mozzarella, all the way up to the edge. Cover half with a thin, even layer of raw sausage. Cover the other half with the pepperoni. Top with a couple handfuls of crushed tomatoes. Spread out with hands to the edge. Sprinkle top evenly with grated Parm. 5 Bake, rotating halfway through, until golden around the edge, about 25 minutes. Let rest for about 5 minutes, then either gently lift pizza out of pan or just cut your slice out of the pan like a pie!', healthScore: 3, ingredients: '1 teaspoon granulated sugar, 1 packet (2 1/4 teaspoons) active dry yeast, 18 ounces all-purpose flour (about 3 1/2 cups), 2 teaspoons fine sea salt, 1/8 teaspoon cream of tartar, 1/2 cup plus 3 tablespoons corn oil, plus additional for oiling the bowl, 1 tablespoon melted unsalted butter, 12 ounces deli sliced part skim mozzarella, 1 pound bulk Italian sausage, 8 ounces thinly sliced pepperoni, One 28-ounce can whole San Marzano tomatoes, crushed by hand, Grated Parmesan, for topping and garnish', imageUrl:' https://hips.hearstapps.com/hmg-prod/images/delish-deep-dish-pizza-023-horizontal-1545250396.jpg', chefId: anna.id},
  {name: 'Texas Barbecue (Smoked Tritip Roast)', cuisine: 'American', directions: 'Blot the roast with a paper towel and season generously with salt and pepper or seasoning rub. Lightly coat grates with vegetable oil spray. Close cooking chamber lids. Place 3-5 lbs. of charcoal, in center of the firebox. Open the firebox air vent approximately 1-2″, and smokestack damper halfway. With firebox lid open, stand back, carefully light charcoal and allow to burn until covered with a light ash. (Approximately 20 minutes). Once coals have ashed over, add wood chunks. Do not shut firebox lid until the smoke is clean, often called Blue Smoke. Close firebox lid. Adjust the firebox air vent and smokestack damper to regulate cooking temperature. The ideal smoking temperature is between 275°F-300°F.', healthScore: 4, ingredients: '1 Beef Tri-Tip roast (1.5 to 2 lbs.), 1 Tbsp. Kosher salt, 1 Tbsp. coarse ground pepper or your preferred seasoning rub', imageUrl: 'https://cdn0.wideopencountry.com/wp-content/uploads/2017/11/Meat-793x526-2.png', chefId: mandy.id},
  {name: 'Goulash', cuisine: 'Europian', directions: 'In a large skillet over medium heat, heat oil. Add onion and cook until soft, about 5 minutes. Add garlic and cook until fragrant, about 1 minute more. Add ground beef and cook until no longer pink, about6 minutes. Drain fat and return to pan. Season with salt and pepper. Add tomato paste and stir to coat, then pour in broth, tomato sauce, and diced tomatoes. Season with Italian seasoning and paprika, and stir in macaroni. Bring to a simmer and cook, stirring occasionally, until pasta is tender, about 15 minutes. Stir in cheese and remove from heat. Garnish with parsley before serving. ', healthScore: 6, ingredients: '2 tbsp. extra-virgin olive oil, 1 medium yellow onion, chopped 2 cloves garlic, minced 1 lb. ground beef, Kosher salt, Freshly ground black pepper 1 tbsp. tomato paste 1 1/4 c. low-sodium beef broth 1 (15-oz.) can tomato sauce 1 (15-oz.) can diced tomatoes 1 tsp. Italian seasoning 1 tsp. paprika 1 1/2 c. elbow macaroni, uncooked1 c. shredded cheddar, Freshly chopped parsley, for garnish' , imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2010/10/American-Goulash-fork.jpg', chefId: john.id},
  {name: 'Crème Catalan', cuisine: 'Europian', directions: 'Put the milk on the stove in a small saucepan, along with the citrus peels and the cinnamon stick. Slowly bring to a boil. Dissolve the cornstarch in a splash of water and set aside. While the milk is slowly heating, beat the egg yolks with the sugar, until the mixture turns pale yellow. Beat in the dissolved cornstarch and a spoonful of the hot milk. Remove the citrus peels and cinnamon stick from the hot milk, and lower the heat. Slowly add the egg yolk mixture to the milk, making sure to keep stirring so that the eggs do not scramble! Stir constantly over a low heat, until the mixture has thickened. Remove from the heat and pour the mixture into traditional clay dishes or ramekins. Allow the custard to cool, and then cover in plastic wrap and chill the crema catalanas for about four hours (preferably overnight). Before serving, I like to let mine come to room temperature (unless it is summer-- that would be too hot!). Then sprinkle a thin layer of sugar on top of each ramekin. Spread the sugar out by tilting the ramekins in all directions. Caramelize with a small kitchen blowtorch (though the truly authentic crema catalanas are made with a hot iron (see photo below). Top with fresh fruit (optional) and enjoy!', healthScore: 4, ingredients: '2 tablespoons (15 g) of cornstarch, 2½ cups of whole milk, A big slice of peel from a lemon and an orange (note: not the zest, but rather big slices of the peel), 1 cinnamon stick, 5 large egg yolks, ½ cup superfine sugar (if you can not find superfine, do not worry, it will just be a bit more grainy) Additional sugar to caramelize on top Fresh fruit (like figs, raspberries or strawberries) to top', imageUrl: 'https://www.goodfood.com.au/content/dam/images/1/m/3/v/u/image.related.articleLeadwide.620x349.29uym.png/1396639926180.jpg', chefId: billy.id},
  {name: 'Ceviche', cuisine: 'South American', directions: 'Slice the red onion very thinly and salt generously and let stand 15 minutes until it begins to release its liquid (this will remove the bitterness). Rinse well, squeeze dry. Place fish, garlic, onion, salt, pepper, fresh chilies, and lime juice in a shallow serving bowl, gently mix, and marinate in the refrigerator for at least 30 minutes before serving. The longer you marinate the firmer and more “cooked” the fish will become. Before serving, gently toss in the fresh cilantro, cucumber and tomato and a drizzle of olive oil, gently mix. Taste for salt and add more if necessary. If adding avocado, gently fold it in at the end, after everything is mixed, making sure to use one that is not too soft.', healthScore: 9, ingredients: '½ a red onion, very thinly sliced, 1 pound fresh fish- sea bass, red snapper, corvina, dorado, escolar, mahi-mahi, tilapia, or hamachi – diced into 1/2 inch cubes. 2–3 garlic cloves very finely minced ( use a garlic press) 1– 1 ½ teaspoon kosher salt, start with 1, add more to taste, ¼ teaspoon black pepper, ¼–½  cup fresh cilantro chopped, 1 fresh serrano or jalapeño chili pepper seeded and very finely chopped. Start conservatively, more to taste. ¾ cup fresh lime juice ( 4–6 limes) freshly squeezed ( try to use ripe limes), 1 cup grape or cherry tomatoes, cut in half  ( or 1 cup diced tomatoes), 1 cup diced cucumber, 1 tablespoon olive oil (optional), 1 semi-firm Avocado, diced, as garnish, optional', imageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2009/08/ceviche-vertical-a-1800.jpg', chefId: john.id},
  {name: 'Sushi', cuisine: 'Asian', directions: 'Wrap sushi mat in plastic wrap. Fold pieces of nori in half to split them.', healthScore: 8, ingredients: '½ pound imitation crab meat, 1 avocado, ripe but still firm, ½ medium cucumber, peeled and sliced into long Julienne strips, Toasted nori seaweed, Toasted sesame seeds', imageUrl: 'https://properfoodie.com/wp-content/uploads/2019/05/Japanese-sushi-platter-.jpg', chefId: anna.id},
]
const [cheeseBurger, hawianBurger, pepperonniPizza, ceasurSalad, cheesePizza, samon, fishChips] = await Promise.all(recipes.map(recipe => Recipe.create(recipe)))

};

//Must be activated for psql to work
//Must deactivate for the app to work

// syncAndSeed();


module.exports = syncAndSeed;
