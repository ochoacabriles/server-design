const { persistence, nodeEnv, isIntegrationTest } = require('../config/environment');
const MemoryDao = require('./memory');
const MongoDao = require('./mongo');

let dao = undefined;

const getDao = async () => {
  if (!dao) {
    dao = (persistence === 'MEMORY' || nodeEnv === 'test' || isIntegrationTest)
      ? new MemoryDao()
      : new MongoDao();

      await dao.connect();
  }

  return dao;
};

module.exports = getDao;
