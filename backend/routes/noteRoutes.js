const express = require('express');
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require('../controllers/noteController');

const authMiddleware = require('../middlewares/authMIddleware');

router.route('/').get(authMiddleware, getNotes).post(authMiddleware, addNote);

module.exports = router;
