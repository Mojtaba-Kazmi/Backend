const express = require("express");
<<<<<<< HEAD
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const checkSauceInput = require("../middleware/check-sauce-input")

const sauceCtrl = require("../controllers/sauce");

=======
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const checkSauceInput = require("../middleware/check-sauce-input")
const sauceCtrl = require("../controllers/sauce");

const router = express.Router();

>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, checkSauceInput, sauceCtrl.createSauce);
router.put("/:id", auth, multer, checkSauceInput, sauceCtrl.updateSauce)
router.delete("/:id", auth, sauceCtrl.deleteSauce)
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)

module.exports = router;
