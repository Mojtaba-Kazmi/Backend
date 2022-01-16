// installation de multer : npm install --save multer
// appel de multer ( qui permet de gerer les fichiers envoyer en http)
const multer = require("multer");

// creation d'un objet dictionnaire des types MIME pour définire le format des images
const MIME_TYPE = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
};

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
		const extension = MIME_TYPE[file.mimetype];

		callback(null, name + Date.now() + "." + extension);
	},
});

// ------------------export-------------
// export de multer entièrement configuré, en lui passant notre constante storage et lui indiquons que nous gérerons uniquement les téléchargements de fichiers image.
module.exports = multer({ storage }).single("image");
