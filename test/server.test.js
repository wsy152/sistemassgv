const supertest = require('supertest');

const request = supertest('localhost:3002');

// eslint-disable-next-line arrow-body-style
test('Responder na porta 3002', () => {
  return request.get('/')
    .then((res) => expect(res.status).toBe(200));
});
