const express = require('express');
const router = express.Router();
const {signup, signin, signout, requireSignIn} = require('../controllers/authController');
//validators
const {runValidation} = require("../validators");
const {userSignUpValidator, userSignInValidator} = require("../validators/authValidator");

router.post('/signup', userSignUpValidator, runValidation, signup);
router.post('/signin', userSignInValidator, runValidation, signin);
router.get('/signout', signout);

router.get('/secret', requireSignIn, (req, res) => {
    res.json({message: 'You have access to secret page'})
});

module.exports = router;
