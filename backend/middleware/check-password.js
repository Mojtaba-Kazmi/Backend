const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {

    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: `Le MDP doit faire 10 caractère au moins , avec une ${passwordSchema.validate('req.body.password', { list: true })}`})
    } else {
        next();
    }
    
};