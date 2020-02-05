const db = require("../data/dbConfig");

const get = () => {
  return db("users");
};

const findById = id => {
  return db("users")
    .first()
    .where({ id });
};

const findBy = filter => {
  return db("users").where(filter);
};

const add = user => {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

const update = (id, changes) => {
  return db('users')
    .where({ id })
    .update(changes);
}

module.exports = {
  get,
  findById,
  findBy,
  add,
  update
};