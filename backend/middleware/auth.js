// Middleware qui protégera les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.

// appel de notre packet jsonwebtoken
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

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
	} catch (error) {
		res.status(401).json({ error: error | "Requete non authentifiée" });
	}
};
