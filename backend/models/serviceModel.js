const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    vehicleModel: {
      type: 'String',
      required: true,
    },
    serviceDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
