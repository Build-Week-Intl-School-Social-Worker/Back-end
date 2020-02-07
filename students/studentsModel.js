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

const update = (id, changes) => {
  return db('students')
    .where({ id })
    .update(changes);
}

 const remove = (id) => {
    return db('students')
      .where('id', id)
      .del();
  }

module.exports = {
  get,
  findById,
  findBy,
  add,
  update,
  remove
};