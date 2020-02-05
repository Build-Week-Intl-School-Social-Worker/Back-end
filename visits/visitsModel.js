const db = require("../data/dbConfig");

const get = () => {
  return db("visits");
};

const findById = id => {
  return db("visits")
    .first()
    .where({ id });
};

const findBy = filter => {
  return db("visits").where(filter);
};

const add = visit => {
  return db("visits")
    .insert(visit, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

const update = (id, changes) => {
  return db('visits')
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