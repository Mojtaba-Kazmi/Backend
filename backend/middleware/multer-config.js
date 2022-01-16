// call multer (which allows you to manage files sent in http)
const multer = require("multer");
// create a MIME type dictionary object to define the image format
const MIME_TYPE = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
};

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
		const extension = MIME_TYPE[file.mimetype];

		callback(null, name + Date.now() + "." + extension);
	},
});

// ------------------export-------------
// fully configured multer export, passing it our storage constant and telling it that we will only handle image file uploads.
module.exports = multer({ storage }).single("image");
