module.exports = (req, res, next) => {
  // If this is the post route
  if (JSON.parse(req.body.sauce !== undefined)) {
    const sauce = JSON.parse(req.body.sauce);
    let { name, manufacturer, description, mainPepper } = sauce;
    let trimedTab = [];

    function toTrim(...string) {
      trimedTab = string.map((elt) => elt.trim());
    }
    toTrim(name, manufacturer, description, mainPepper);

   // Check the number of characters after trim()
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Tous les champs doivent faire au moins 3 caractères");
    }
  } else {
    
  // If this is the Put route
    const sauce = req.body;
    let { name, manufacturer, description, mainPepper } = sauce;
    let trimedTab = [];

    function toTrim(...string) {
      trimedTab = string.map((elt) => elt.trim());
    }
    toTrim(name, manufacturer, description, mainPepper);

    
    // Check the number of characters after trim()
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Tous les champs doivent faire au moins 3 caractères");
    }
  }
};
