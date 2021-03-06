module.exports = (app) => {
  const findAll = (req, res) => {
    app.db('users').select()
      // eslint-disable-next-line arrow-parens
      .then(result => res.status(200).json(result));
  };

  const create = async (req, res) => {
    const result = await app.db('users').insert(req.body);
    res.status(201).json(result[0]);
  };

  return { findAll, create };
};
