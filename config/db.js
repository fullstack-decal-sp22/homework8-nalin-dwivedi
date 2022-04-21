const mongoose = require('mongoose');

// Replace this with your MONGOURL.
const MONGOURL = 'mongodb://127.0.0.1:27017/auth-hw';
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURL, {
      useNewUrlParser: true,
    });
    console.log('Connected to DB');
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;