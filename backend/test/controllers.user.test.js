process.env.NODE_ENV = 'test';

const { getUsers, getUser, addUser } = require('../controllers/user');
const getDao = require('../dao');

const expect = require('chai').expect;

describe('User controller', () => {
  describe('getUsers', () => {
    beforeEach(async () => {
      const daoClient = await getDao();
      await daoClient.clear();
    });

    it('Should return an array of users that have been added', async () => {
      const name = 'Lionel';
      const lastname = 'Messi';

      await addUser({
        name,
        lastname,
        dni: 'Goat',
      });

      const result = await getUsers();
      expect(result).to.be.an('array');
      expect(result.length).to.be.eq(1);
      expect(result[0].nickname).to.be.eq(`${name} ${lastname}`);
      expect(result[0]).to.have.property('randomCode');
    });

    it('Should return empty array if no users have been added', async () => {
      const result = await getUsers();

      expect(result).to.be.an('array');
      expect(result.length).to.be.eq(0);
    });
  });

  describe('getUser', () => {
    beforeEach(async () => {
      const daoClient = await getDao();
      await daoClient.clear();
    });

    it(`Should return null if the user doesn't exist`, async () => {
      const result = await getUser('123');

      expect(result).to.be.null;
    });

    it(`Should return the user if it exists`, async () => {
      const name = 'Lionel';
      const lastname = 'Messi';

      const user = await addUser({
        name,
        lastname,
        dni: 'Goat',
      });

      const result = await getUser(user._id);

      expect(result).to.be.an('object');
      expect(result.nickname).to.be.eq(`${name} ${lastname}`);
      expect(result).to.have.property('randomCode');
    });
  });

  describe('addUser', () => {
    beforeEach(async () => {
      const daoClient = await getDao();
      await daoClient.clear();
    });

    it('Should add a user to the database', async () => {
      const name = 'Lionel';
      const lastname = 'Messi';

      const result = await addUser({
        name,
        lastname,
        dni: 'Goat',
      });

      expect(result).to.be.an('object');
      expect(result.nickname).to.be.eq(`${name} ${lastname}`);
      expect(result).to.have.property('randomCode');
    });

    it('Should throw an error if the user is invalid', async () => {
      try {
        await addUser({
          name: 'Lionel',
          dni: 'Goat',
        });

        throw new Error('Should have thrown an error');
      } catch (e) {
        expect(e.message).to.be.eq('Invalid user');
      }
    });
  });
});
