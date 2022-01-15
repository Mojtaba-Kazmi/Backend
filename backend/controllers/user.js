
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

exports.signup = (req,res,next) => {
    const emailCryptoJS = CryptoJS.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                email: emailCryptoJS,
                password: hash
            });

            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé!'}))
                .catch(error => res.status(400).json({ error }));
        }) //collecting the hash of the password and saving to the new user and save to the database
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req,res,next) => {
    const emailCryptoJS = CryptoJS.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
    User.findOne({ email: emailCryptoJS })
        .then( user => {

            if(!user) {

                return res.status(401).json({message: 'Utilisateur non trouvé !'});

            }

            bcrypt.compare(req.body.password, user.password)
                .then( valid => {
                    if(!valid) {

                        return res.status(401).json({error: 'Mot de passe incorrect !'});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            process.env.SECRET_TOKEN,
                            { expiresIn: '24' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));


        })
        .catch(error => res.status(500).json({ error }));


};