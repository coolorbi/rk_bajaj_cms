const express = require('express');
const authMiddleware = require('../middlewares/authMIddleware');
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController.js');

const router = express.Router();

const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.get('/', authMiddleware, getTickets);
router.post('/', authMiddleware, createTicket);
router.get('/:ticketId', authMiddleware, getTicket);
router.delete('/:ticketId', authMiddleware, deleteTicket);
router.put('/:ticketId', authMiddleware, updateTicket);

module.exports = router;
