const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://shehanmaxwell:jZZiv5zFm2zZ6rhO@nodeandexpressprojects.4popwk8.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true, //to remove log error warnings
    useCreateIndex: true, //to remove log error warnings
    useFindAndModify: false, //to remove log error warnings
    useUnifiedTopology: true, //to remove log error warnings
  });
};

module.exports = connectDB;
