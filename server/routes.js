const express = require('express');
const router = express.Router();
const db = require('./db');
const { User, Product, Company, Offering, Chef, Recipe } = db.models;

//////////////////////////** 1 **/////////////////////////////////////

router.get('/api/users', (req, res, next)=>{
  User.findAll()
    .then(item => res.send(item))
    .catch(next)
});

//////////////////////////** 2 **/////////////////////////////////////

router.get('/api/products', (req, res, next)=>{
  Product.findAll()
    .then(item => res.send(item))
    .catch(next)
});

router.get('/api/companies', (req, res, next)=>{
  Company.findAll()
    .then(item => res.send(item))
    .catch(next)
});

router.get('/api/offerings', (req, res, next)=>{
  Offering.findAll()
    .then(item => res.send(item))
    .catch(next)
});

//////////////////////////** 3 **/////////////////////////////////////////

//GET
router.get('/api/chefs', (req, res, next)=>{
  Chef.findAll()
    .then(item => res.send(item))
    .catch(next)
});
router.get('/api/recipes', (req, res, next)=>{
  Recipe.findAll()
    .then(item => res.send(item))
    .catch(next)
});

//SINGLE GET
router.get('/api/chefs/:id', (req, res, next)=>{
  Chef.findByPk(req.params.id , {
    include: [Recipe]
  })
    .then(item => res.send(item))
    .catch(next)
});
router.get('/api/recipes/:id', async (req, res, next)=> {
  try{
    res.send(await Recipe.findByPk(req.params.id, {
      include: [User]
    }))
  }catch(ex){
    next(ex)
  }
});

//CREATE
router.post('/api/chefs', (req, res, next)=> {
  Chef.create(req.body)
    .then(item => res.send(item))
    .catch(next)
})
router.post('/api/recipes', (req, res, next)=> {
  Recipe.create(req.body)
    .then(item => res.send(item))
    .catch(next)
});

//DELETE
router.delete('/api/chefs/:id', (req, res, next)=> {
  Chef.findByPk(req.params.id)
    .then(item => item.destroy())
    .then(item => res.sendStatus(204))
    .catch(next)
})

//UPDATE
router.put('/api/recipes/:id', (req, res, next)=>{
  Chef.findByPk(req.params.id)
    .then(item => res.update(item))
    .then(item => res.send(item))
    .catch(next)
});
router.put('/api/chefs/:id', (req, res, next)=> {
  Chef.findByPk(req.params.id)
    .then(item => res.update(item))
    .then(item => res.send(item))
    .catch(next)
})

//////////////////////////** 4 **//////////////////////////////////////

// SESSIONS
// router.use(require('express-session')({
//   secret: process.env.SECRET
// }));

router.get('/api/sessions', (req, res, next)=> {
  const user = req.session.user;
  if(user){
    return res.send(user);
  }
  next({ status: 401 });
});

router.delete('/api/logout', (req, res, next)=> {
  req.session.destroy();
  res.sendStatus(204);
});

router.post('/api/login', (req, res, next)=> {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then( user => {
    if(!user){
      throw ({ status: 401 });
    }
    req.session.user = user;
    return res.send(user);
  })
  .catch( err => next(err));
});
//USED WHEN THE LOGIN ARE BUTTONS AND NOT FILLOUT FORMS
// router.post('/api/sessions', (req, res, next)=>{
//   const user = users[req.body.username];
//   if(user){
//     req.session.user = user;
//     return res.send(user)
//   }
//   next({status: 401})
// })

module.exports = router;
