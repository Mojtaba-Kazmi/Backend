// Middleware that will protect the selected routes and verify that the user is authenticated 
//before authorizing the sending of his requests.

const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

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
	} catch (error) {
		res.status(401).json({ error: error | "Requete non authentifiée" });
	}
};
