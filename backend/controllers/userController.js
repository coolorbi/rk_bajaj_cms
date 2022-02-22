const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, mobile } = req.body;
  if (!name || !email || !password || !mobile) {
    res.status(400);
    throw new Error('Please Fill all Fields!!');
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists!!');
  }
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashedPassword,
    name,
    mobile,
  });
  if (user) {
    transporter.sendMail({
      to: email,
      from: 'hello@rkbajaj.in',
      subject: 'Welcome to RK BAJAJ',
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body style="text-align: center">
          <h2 style="margin-top: 50px">Welcome to Rk Bajaj</h2>
          <h3>Hello ${name},</h3>
          <p>We hope you are doing well, and riding safely!</p>
          <p>
            Thanks for Choosing US!
            <p>With our new Dashboard you can download your
              Insurance and RC, Book Your Vehicle Service With a Click of a Button!</p> 
          </p>
          <a
            style="
              background-color: #2780e3;
              padding: 15px 30px;
              color: #fff;
              margin-top: 10px;
              display: inline-block;
              text-decoration: none;
            "
            href="https://www.rkbajaj.in"
            >Get Started</a
          >
        </body>
      </html>
      `,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: getToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user Data!!');
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: getToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Email or password do not match');
  }
});

const getProfile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    _id: req.user._id,
    email: req.user.email,
    mobile: req.user.mobile,
    name: req.user.name,
  });
});

const getToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

module.exports = {
  createUser,
  loginUser,
  getProfile,
};
