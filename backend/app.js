const express = require('express'); //Imported express in our file app.js
const app = express(); //Called express method to create express application.
const mongoose = require('mongoose'); //Imported mongoose in our file app.js
const userRoutes = require('./routes/user');

//configurated mongoose with the online account
mongoose.connect('mongodb+srv://dbUsers:hello123@cluster0.dqryp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewURLParser: true,useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !')) //Promise
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json()); //recognizing the incoming Request Object as a JSON Object.

//Interacting with resources from a different origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/auth', userRoutes);

module.exports = app; //Exportation of our files