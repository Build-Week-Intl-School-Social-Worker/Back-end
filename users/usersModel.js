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

const findStudent = filter => {
  return db("students").where(filter).first();
}

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

const getSocWorkerStudents = id => {
  return db("students as s")
    .join("users as u", "u.id", "v.user_id")
    .join("roles as r", "r.id", "u.role_id")
    .join("visits as v", "v.user_id", "u.id")
    .select("u.id", "u.name", "s.name as student_name", "s.age", "s.grade", "v.visit_date")
    .where("u.id", id);
}

const addStudentToUser = (userId, student) => {
  console.log("student", student);
  return db("user_students")
    .insert({user_id: userId, student_id: student.student_id}, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
}


module.exports = {
  get,
  findById,
  findBy,
  add,
  update,
  getSocWorkerStudents,
  addStudentToUser
};