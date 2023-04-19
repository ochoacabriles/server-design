const { port } = require('../../config/environment');
const getDao = require('../../dao');
const request = require('supertest')(`http://localhost:${port}`);
const expect = require('chai').expect;

describe('Users api test', () => {
  describe('GET /user', () => {
    beforeEach(async () => {
      const daoClient = await getDao();
      await daoClient.clear();
    });

    it('should return 200 OK and empty array as body if there are no users', async () => {
      const response = await request.get('/user');

      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.eq(0);
    });
  });

  describe('POST /user', () => {
    beforeEach(async () => {
      const daoClient = await getDao();
      await daoClient.clear();
    });

    it('should return 200 and the user if the user is valid', async () => {
      const user = {
        name: 'Lionel',
        lastname: 'Messi',
        dni: 'Goat',
      };

      const response = await request.post('/user').send(user);

      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('nickname');
      expect(response.body.nickname).to.be.eq(`${user.name} ${user.lastname}`);
      expect(response.body).to.have.property('randomCode');
    });

    it('should return 400 if the user is invalid', async () => {
      const user = {
        name: 'Lionel',
        lastname: 'Messi',
      };

      const response = await request.post('/user').send(user);

      expect(response.status).to.be.eq(400);
    });
  });
});
