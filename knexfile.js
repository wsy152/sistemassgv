module.exports = {
  test: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '[i8932adcv]',
      database: 'expro',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
