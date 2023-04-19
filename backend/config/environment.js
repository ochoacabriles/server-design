require('dotenv').config();

module.exports.port = process.env.PORT;
module.exports.mongoUrl = process.env.MONGO_URL;
module.exports.persistence = process.env.PERSISTENCE;
module.exports.nodeEnv = process.env.NODE_ENV;
module.exports.isIntegrationTest = process.argv[2] === 'TEST';
