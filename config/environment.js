require('dotenv').config();

module.exports.port = process.env.PORT;
module.exports.mongoUrl = process.env.MONGO_URL;