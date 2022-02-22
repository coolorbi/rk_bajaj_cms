const express = require('express');
const {
  createService,
  getServicesByUser,
} = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMIddleware');

const router = express.Router();

router.post('/', authMiddleware, createService);
router.get('/', authMiddleware, getServicesByUser);

module.exports = router;
