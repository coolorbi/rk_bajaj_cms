const User = require('../models/userModel');
const Ticket = require('../models/ticketModels');
const asyncHandler = require('express-async-handler');

const getTickets = asyncHandler(async (req, res, next) => {
  const user = User.findById(req.user);
  if (!user) {
    res.status(401);
    throw new Error('User not found!');
  }

  const tickets = await Ticket.find({ user: req.user });
  res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res, next) => {
  const { product, description } = req.body;
  console.log(product, description);
  const user = User.findById(req.user);
  if (!user) {
    res.status(401);
    throw new Error('User not found!');
  }
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user,
    status: 'new',
  });

  res.status(201).json(ticket);
});

const getTicket = asyncHandler(async (req, res, next) => {
  const ticketId = req.params.ticketId;
  const user = await User.findById(req.user);
  if (!user) {
    res.status(401);
    throw new Error('User not found!!');
  }

  const ticket = await Ticket.findById(ticketId);
  if (!ticket) {
    res.status(404);
    throw new Error('Ticket Not Found!!');
  }

  if (ticket.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error('It"s not your ticket');
  }

  res.status(200).json(ticket);
});

const deleteTicket = asyncHandler(async (req, res, next) => {
  const ticketId = req.params.ticketId;
  const user = await User.findById(req.user);
  if (!user) {
    res.status(401);
    throw new Error('User not found!!');
  }
  const ticket = await Ticket.findById(ticketId);
  if (!ticket) {
    res.status(401);
    throw new Error('Ticket not found!!');
  }

  if (ticket.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error('You can only delete your ticket!!');
  }

  await ticket.remove();
  res.status(200).json({ success: 'true' });
});

const updateTicket = asyncHandler(async (req, res, next) => {
  const ticketId = req.params.ticketId;
  const user = await User.findById(req.user);
  if (!user) {
    res.status(401);
    throw new Error('User not found!!');
  }
  const ticket = await Ticket.findById(ticketId);
  if (!ticket) {
    res.status(401);
    throw new Error('Ticket not found!!');
  }
  if (ticket.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error('You can only delete your ticket!!');
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, req.body, {
    new: true,
  });

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
};
