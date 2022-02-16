const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Sever stared on ${PORT}`);
});
