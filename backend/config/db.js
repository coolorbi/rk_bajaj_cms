const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://admin:admin1234@cluster0.7y0iw.mongodb.net/rkbajaj?retryWrites=true&w=majority'
    );

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
