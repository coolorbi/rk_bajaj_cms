const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

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
