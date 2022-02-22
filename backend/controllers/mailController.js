const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const asyncHandler = require('express-async-handler');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

const sendMail = asyncHandler(async (req, res) => {
  const { message, to, subject } = req.body;
  const messageLog = await transporter.sendMail({
    to: to,
    from: 'support@rkbajaj.in',
    subject: subject,
    html: message,
  });
  if (messageLog.message === 'success') {
    res.status(200).json({ message: 'success' });
  }
});

module.exports = {
  sendMail,
};
