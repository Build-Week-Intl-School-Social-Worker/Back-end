const db = require("../data/dbConfig");

const get = () => {
  return db("students");
};

const findById = id => {
  return db("students")
    .first()
    .where({ id });
};

const findBy = filter => {
  return db("students").where(filter);
};

const add = student => {
  return db("students")
    .insert(student, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

module.exports = {
  get,
  findById,
  findBy,
  add
};