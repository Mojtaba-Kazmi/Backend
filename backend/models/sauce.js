// // The MongoDB database is split into collections: the collection name defaults to 
//the plural of the model name. Here it will be Sauces.
const mongoose = require("mongoose");



// create a data schema

const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true },
	name: { type: String, required: true },
	manufacturer: { type: String, required: true },
	description: { type: String, required: true },
	mainPepper: { type: String, required: true },
	imageUrl: { type: String, required: true },
	heat: { type: Number, required: true },
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
module.exports = mongoose.model("Sauce", sauceSchema);
