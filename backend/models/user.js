const mongoose = require("mongoose");

// Plugin validator for email security 
const uniqueValidator = require("mongoose-unique-validator");

//Created a data schema
const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

//We call the plugin that secures the schema before exporting the schema
userSchema.plugin(uniqueValidator);
//// In our schema, the unique value, with the mongoose-unique-validator element 
//passed as a plugin, will ensure that neither user can share the same email address.

//Exportation of the model, the type and schema are in argument
module.exports = mongoose.model("User", userSchema); 
