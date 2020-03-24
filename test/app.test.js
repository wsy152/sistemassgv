const request = require('supertest');

const app = require('../src/app');

// eslint-disable-next-line arrow-body-style
test('Deverá responder na raiz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
