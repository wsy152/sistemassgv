test('Devo conhecer as principais assertivasdo jest', () => {
  const number = null;
  expect(number).toBeNull();
});

test('Trabalhar com objetos', () => {
  const obj = { name: 'Edvaldo', mail: 'john@email.com' };
  expect(obj).toHaveProperty('name');
});
