//Create a connection to Mongoose
const mongoose = require('mongoose');
// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/SOCIAL_NETWORK_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// Export connection 
module.exports = mongoose.connection;
