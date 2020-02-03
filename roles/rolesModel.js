const db = require("../data/dbConfig");

const get = () => {
  return db("roles");
};

const findById = id => {
  return db("roles")
    .first()
    .where({ id });
};

const add = role => {
  return db("roles")
    .insert(role, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

module.exports = {
  get,
  findById,
  add
};