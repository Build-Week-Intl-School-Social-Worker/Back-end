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

// const getSocWorkerStudents = id => {
//   return db("students as s")
//     .join("users as u", "u.id", "v.user_id")
//     .join("roles as r", "r.id", "u.role_id")
//     .join("visits as v", "v.user_id", "u.id")
//     .select("u.id", "u.name", "s.name as student_name", "s.age", "s.grade", "v.visit_date")
//     .where("s.id", id);
// }

module.exports = {
  get,
  findById,
  findBy,
  add,
  update,
  // getSocWorkerStudents
};