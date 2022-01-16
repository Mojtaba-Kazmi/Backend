<<<<<<< HEAD
// call multer (which allows you to manage files sent in http)
const multer = require("multer");
// create a MIME type dictionary object to define the image format
=======
// installation de multer : npm install --save multer
// appel de multer ( qui permet de gerer les fichiers envoyer en http)
const multer = require("multer");

// creation d'un objet dictionnaire des types MIME pour définire le format des images
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
const MIME_TYPE = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
};

<<<<<<< HEAD
// The multer package needs to know the destination of the file as well as the desired file name.
const storage = multer.diskStorage({
	// function that indicates in which folder saved the files
	destination: (req, file, callback) => {
		callback(null, "images");
	},
	// function that lets you know which file name is used
	filename: (req, file, callback) => {
		// we remove the spaces with the split and replace them with dashes
		// name will therefore be the new name of the file
		const name = file.originalname.split(" ").join("-");
		// file extension will be the dictionary element that corresponds to the mimetype of the file sent by the frontend
=======
// object de config pour multer
// Le package multer a besoin de connaître la destination du fichier ainsi que le nom de fichier souhaité.
const storage = multer.diskStorage({
	// fonction qui indique dans quel dossier enregistré les fichiers
	destination: (req, file, callback) => {
		callback(null, "images");
	},
	// fonction qui permet de savoir quel nom de fichier utilisé
	filename: (req, file, callback) => {
		// on enleve les espaces avec le split et on les remplaces par des tirets
		// name sera donc le nouveau nom du fichier
		const name = file.originalname.split(" ").join("-");
		// extension du fichier sera l'element du dictionnaire qui correspond au mimetype du fichier envoyé par le frontend
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
		const extension = MIME_TYPE[file.mimetype];

		callback(null, name + Date.now() + "." + extension);
	},
});

// ------------------export-------------
<<<<<<< HEAD
// fully configured multer export, passing it our storage constant and telling it that we will only handle image file uploads.
=======
// export de multer entièrement configuré, en lui passant notre constante storage et lui indiquons que nous gérerons uniquement les téléchargements de fichiers image.
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
module.exports = multer({ storage }).single("image");
