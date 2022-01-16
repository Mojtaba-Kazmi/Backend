const express = require('express'); 
const mongoose = require('mongoose'); 
const helmet = require('helmet');
const path = require("path");
<<<<<<< HEAD
=======

const nocache = require("nocache");
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
const dotenv = require('dotenv');
dotenv.config();


<<<<<<< HEAD
const nocache = require("nocache");

const bodyParser = require("body-parser");
=======
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7

const userRoutes = require('./routes/user');
const routeSauce = require("./routes/sauce");


//configurated mongoose with the online account
mongoose.connect(process.env.SECRET_DB,
{ useNewURLParser: true,useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !')) //Promise
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express(); //Called express method to create express application.
<<<<<<< HEAD

=======
app.use(helmet());
app.use(nocache());
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7


//Interacting with resources from a different origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//app.use(express.json()); //recognizing the incoming Request Object as a JSON Object.
app.use(bodyParser.json());

<<<<<<< HEAD
app.use(helmet());

app.use(nocache());

app.use("/api/sauces", routeSauce);
app.use('/api/auth', userRoutes);


// permet via express de choisir le dossier source des images via la methode path
=======
app.use("/api/sauces", routeSauce);
app.use('/api/auth', userRoutes);

>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app; //Exportation of our files