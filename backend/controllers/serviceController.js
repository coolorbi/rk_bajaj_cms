const Service = require('../models/serviceModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createService = asyncHandler(async (req, res, next) => {
  const { vehicleModel, serviceDate } = req.body;
  console.log(vehicleModel, serviceDate);

  const user = await User.findById(req.user);
  if (!user) {
    res.status(400);
    throw new Error('User not found!');
  }
  const service = await Service.create({ vehicleModel, serviceDate, user });
  if (!service) {
    res.status(400);
    throw new Error('Invalid Service Data');
  }
  res.status(201).json(service);
});

const getServicesByUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user);
  if (!user) {
    res.status(400);
    throw new Error('User not found!');
  }
  const service = await Service.find({ user: req.user });
  res.status(200).json(service);
});

// const getServicesByDate = asyncHandler(async (req, res, next) => {
//   const { vehicleModel, serviceDate } = req.body;
//   const user = await User.findById(req.user);
//   if (!user) {
//     res.status(400);
//     throw new Error('User not found!');
//   }
//   const service = await Service.find({ serviceDate: serviceDate });
//   if (!service) {
//     res.status(400);
//     throw new Error('Invalid Service Data');
//   }
//   res.status(201).json(service);
// });

module.exports = {
  createService,
  getServicesByUser,
};
