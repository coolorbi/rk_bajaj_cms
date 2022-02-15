const express = require('express');
const {
  createUser,
  loginUser,
  getProfile,
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMIddleware');

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getProfile);

module.exports = router;
