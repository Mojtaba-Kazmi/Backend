<<<<<<< HEAD
// // The MongoDB database is split into collections: the collection name defaults to 
//the plural of the model name. Here it will be Sauces.
const mongoose = require("mongoose");



// create a data schema

const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true },
=======
// // La base de données MongoDB est fractionnée en collections : le nom de la collection est défini par défaut sur le pluriel du nom du modèle. Ici, ce sera Sauces.

// importation de mongoose
const mongoose = require("mongoose");

// --------------------------Exemple a modifier---------
// creation d'un schema de donnée
const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true },
	// Nom de la sauce
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
	name: { type: String, required: true },
	// Créateur de la sauce
	manufacturer: { type: String, required: true },
	// description de la sauce
	description: { type: String, required: true },
	// Ingredients qui pimentent la sauce
	mainPepper: { type: String, required: true },
	// Adresse de l'image de presentation de la sauce
	imageUrl: { type: String, required: true },
	// Force le piquant de la sauce
	heat: { type: Number, required: true },
<<<<<<< HEAD
	// number of Likes received
	likes: { type: Number, required: false, default: 0 },
	// number of dislikes received
	dislikes: { type: Number, required: false, default: 0 },
	// Users who Like the sauce
	usersLiked: { type: [String], required: false },
	// User who DisLike the sauce
	usersDisliked: { type: [String], required: false },
});
// export the model (the type and the schema as arguments)
=======
	// nombre de Like reçu
	likes: { type: Number, required: false, default: 0 },
	// nombre de dislike reçu
	dislikes: { type: Number, required: false, default: 0 },
	// Utilisateurs qui Like la sauce
	usersLiked: { type: [String], required: false },
	// Utilisateur qui DisLike la sauce
	usersDisliked: { type: [String], required: false },
});
// exportation du modele ( le type et le schema en argument)
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
module.exports = mongoose.model("Sauce", sauceSchema);
