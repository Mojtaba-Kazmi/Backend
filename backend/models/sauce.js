// // La base de données MongoDB est fractionnée en collections : le nom de la collection est défini par défaut sur le pluriel du nom du modèle. Ici, ce sera Sauces.

// importation de mongoose
const mongoose = require("mongoose");

// --------------------------Exemple a modifier---------
// creation d'un schema de donnée
const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true },
	// Nom de la sauce
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
module.exports = mongoose.model("Sauce", sauceSchema);
