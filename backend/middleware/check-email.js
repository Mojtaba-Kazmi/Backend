module.exports = (req, res, next) => {
    const validEmail = (email) => {
        let emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isRegexTrue = emailRegexp.test(email)
        isRegexTrue ? next() : res.status(400).json({ message: 'Veuillez entrer une adresse email valide!' });
    }
    validEmail(req.body.email)
  };