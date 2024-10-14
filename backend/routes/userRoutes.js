const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');



const router = express.Router();



// Public routes
router.post('/signup', registerUser);
router.post('/login', loginUser);


// Protected route
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
