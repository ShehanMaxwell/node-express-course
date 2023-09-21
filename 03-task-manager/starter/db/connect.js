const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, //to remove log error warnings
    useCreateIndex: true, //to remove log error warnings
    useFindAndModify: false, //to remove log error warnings
    useUnifiedTopology: true, //to remove log error warnings
  });
};

module.exports = connectDB;
