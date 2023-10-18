const express = require('express');

const router = express.Router();

const authController = require('../Controllers/userController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

module.exports = router;


// // // Protected route for driver users
// router.get('/dashboard', authenticateToken, (req, res) => {
//   if (req.user.role === 'driver') {
//     // Access allowed for driver users
//     res.json({ message: 'Welcome to the driver dashboard' });
//   } else {
//     res.status(403).json({ error: 'Forbidden' });
//   }
// });

// module.exports = router;
