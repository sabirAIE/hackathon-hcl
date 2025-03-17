const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://hcp:P5iVga7jX9i2HPNL@health-care-provider.0f6qd.mongodb.net/?retryWrites=true&w=majority&appName=health-care-provider", { 
    //   useNewUrlParser: true, 
    //   useUnifiedTopology: true 
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error("asdasdasds", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
