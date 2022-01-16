<<<<<<< HEAD
// Middleware that will protect the selected routes and verify that the user is authenticated 
//before authorizing the sending of his requests.

=======
// Middleware qui protégera les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.

// appel de notre packet jsonwebtoken
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

<<<<<<< HEAD
// export the file
module.exports = (req, res, next) => {
	try {
		// retrieve only the second element of the array (via split)
		const token = req.headers.authorization.split(" ")[1];
		// We check the decoded token with the secret key initiated with the creation of the initially 
		//encoded token (Cf Controller user), the keys must match
		const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
		// Check that the userId sent with the request matches the userId encoded in the token
		const userID = decodedToken.userID;
		// authorization condition
		if (req.body.userID && req.body.userID !== userID) {
			throw "User ID non valable !";
		} else {
			// if everything is valid we go to the next middleware
			next();
		}
		// In case of error
=======
// export du fichier
module.exports = (req, res, next) => {
	try {
		// recuperation  uniquement du deuxième élément du tableau (via split)
		const token = req.headers.authorization.split(" ")[1];
		// On vérifie le token décodé avec la clé secrète initiéé avec la création du token encodé initialement (Cf Controller user), les clés doivent correspondre
		//const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
		const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
		// On vérifie que le userId envoyé avec la requête correspond au userId encodé dans le token
		const userID = decodedToken.userID;
		// condition d'authorisation
		if (req.body.userID && req.body.userID !== userID) {
			throw "User ID non valable !";
		} else {
			// si tout est valide on passe au  middleware suivant
			next();
		}
		// en cas d'erreur
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
	} catch (error) {
		res.status(401).json({ error: error | "Requete non authentifiée" });
	}
};
