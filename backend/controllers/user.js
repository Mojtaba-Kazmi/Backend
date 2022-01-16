const bcrypt = require("bcrypt");

//Import the jwt packet to assign a token to a user when he connects
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const cryptoJS = require("crypto-js");
require('dotenv').config();

// Function for registering new user
exports.signup = (req, res, next) => {

    const emailCryptoJS = cryptoJS.HmacSHA256(req.body.email, `${process.env.EMAIL_CRYPTOJS}`).toString();
	
	// we hash the password in the body of the request
	bcrypt
		// We call the hash method of bcrypt and we pass it the password of the user, the salte (10) this will be the number of turns we make the algorithm do
		.hash(req.body.password, 10)
		// We retrieve the mdp hash that we will register as a new user in the mongoDB BBD
		.then((hash) => {
			const user = new User({
				// We pass the email found in the body of the request
				email: emailCryptoJS,
				// We get the hashed mdp of bcrypt
				password: hash,
			});
			// Save the user to the database
			user.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		// If there is already a user with this email address
		.catch( error => res.status(500).json({ error }));
};


//function for user connection which checks if the user exists in the MongoDB database during login
//if yes it checks its password, if it is good it returns a TOKEN containing the id of the user, otherwise it returns an erro
exports.login = (req, res, next) => {
    const emailCryptoJS = cryptoJS.HmacSHA256(req.body.email, `${process.env.EMAIL_CRYPTOJS}`).toString();

	//Search via the findOne function of a user, here in relation to his email
	User.findOne({ email: emailCryptoJS})
		.then( user => {
			// If we can't find the user, we will return a 401 "unauthorized" code
			if (!user) {
				return res.status(401).json({ message: "Utilisateur non trouvé !" });
			}
			bcrypt
				// we compare the password entered and the one in the body of the request to know if they have the same original string
				.compare(req.body.password, user.password)
				.then( valid => {
				// If false, it's not the right user, or the password is incorrect
					if (!valid) {
						return res.status(401).json({ error: "Mot de passe incorrect !" });
					}
					
					// If true, we return a status of 200 and a JSON object with a userID + a token
					res.status(200).json({
						
						// The backend server returns a token to the frontend
						userId: user._id,
						// we will be able to obtain an encoded token for this authentication thanks to jsonwebtoken, we will create tokens and verify them
						token: jwt.sign(
							// .sign encodes a new token
							{ userId: user._id },
							// encoding with secret characters
							// Token encryption key which can be made more complex in production
						    process.env.SECRET_TOKEN,
							// Configuration argument with an expiration after 24h
							{ expiresIn: "24h" }
						)
					});
				})

				
				// We encode the userID for the creation of new objects, and this allows to apply the correct userID to the objects and not to modify the objects of other users
				.catch( error => res.status(500).json({ error }));
		})
		.catch( error => res.status(500).json({ error }));
};
