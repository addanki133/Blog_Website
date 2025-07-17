const express = require('express');
const { signupController, loginController, getProfileController } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile',authMiddleware,getProfileController)
router.post('/signup',signupController)
router.post('/login',loginController)

module.exports = router;