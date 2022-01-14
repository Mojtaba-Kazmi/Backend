const mongoose = require('mongoose'); //Imported mongoose in our file sauce.js

//Created a data schema
const sauceSchema = mongoose.Schema ({

    userId: { type: String, required: true },
	name: { type: String, required: true },
	manufacturer: { type: String, required: true },
	description: { type: String, required: true },
	mainPepper: { type: String, required: true },
	imageUrl: { type: String, required: true },
	heat: { type: Number, required: true },
	likes: { type: Number, required: false, default: 0 },
	dislikes: { type: Number, required: false, default: 0 },
	usersLiked: { type: [String], required: false },
	usersDisliked: { type: [String], required: false },
     
});
//Exportation of the model, the type and schema are in argument
module.exports = mongoose.model('Sauce',sauceSchema);