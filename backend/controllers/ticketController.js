const User = require('../models/userModel');
const Ticket = require('../models/ticketModels');
const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

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

  transporter.sendMail({
    to: req.user.email,
    from: 'support@rkbajaj.in',
    subject: 'Ticket Created.',
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body style="text-align: center">
        <h2 style="margin-top: 50px">Hello ${req.user.name}</h2>
        <h3>Your Ticket has been created!</h3>
        <p>These are your ticket details</p>
        <p>
          Product: ${product}
           
        </p>
        <p>Description: ${description}</p>
        <p>Our staff will resolve your issue as soon as possible.</p>
        <p>We will reach to you Soon!</p>
        <a
          style="
            background-color: #2780e3;
            padding: 15px 30px;
            color: #fff;
            margin-top: 10px;
            display: inline-block;
            text-decoration: none;
          "
          href="https://www.rkbajaj.in/tickets"
          >See Tickets</a
        >
      </body>
    </html>
    `,
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
