module.exports = (req, res, next) => {
<<<<<<< HEAD
  // If this is the post route
=======
  // Si il s'agit de la route post
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
  if (JSON.parse(req.body.sauce !== undefined)) {
    const sauce = JSON.parse(req.body.sauce);
    let { name, manufacturer, description, mainPepper } = sauce;
    let trimedTab = [];

    function toTrim(...string) {
      trimedTab = string.map((elt) => elt.trim());
    }
    toTrim(name, manufacturer, description, mainPepper);

<<<<<<< HEAD
   // Check the number of characters after trim()
=======
    // Vérification du nombre de caractères après avoir trim()
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Tous les champs doivent faire au moins 3 caractères");
    }
  } else {
<<<<<<< HEAD
    
  // If this is the Put route
=======
    // Si il s'agit de la route put
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
    const sauce = req.body;
    let { name, manufacturer, description, mainPepper } = sauce;
    let trimedTab = [];

    function toTrim(...string) {
      trimedTab = string.map((elt) => elt.trim());
    }
    toTrim(name, manufacturer, description, mainPepper);

<<<<<<< HEAD
    
    // Check the number of characters after trim()
=======
    // Vérification du nombre de caractères après avoir trim()
>>>>>>> c3b01109f8d86ea8e404f22098859dee29f0e1a7
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Tous les champs doivent faire au moins 3 caractères");
    }
  }
};
