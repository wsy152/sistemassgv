const request = require('supertest');

const app = require('../../src/app');

// eslint-disable-next-line arrow-body-style
test('Deve listar todos os usuarios', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });
});

// eslint-disable-next-line arrow-body-style
test.only('Inserir usuario com sucesso!', () => {
  return request(app).post('/users')
    .send({ name: 'Edvaldo', mail: 'edy@gmail.com', password: '123' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Edvaldo');
    });
});
