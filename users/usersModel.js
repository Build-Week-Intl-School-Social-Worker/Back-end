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

const findStudentById = id => {
  return db("students").where({ id });
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
  return db("user_students as us")
    .join("users as u", "u.id", "us.user_id")
    .join("students as s", "s.id", "us.student_id")
    .select("u.id", "u.name", "s.name as student_name", "s.age", "s.bio", "s.grade")
    .where("u.id", id);
}

const addStudentToUser = (userId, student) => {
  console.log("student", student);
  return db("user_students")
    .insert({user_id: userId, student_id: student.student_id}, "id")
    .then(ids => {
      [id] = ids;

      return findStudentById(student.student_id);
    });
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}


module.exports = {
  get,
  findById,
  findBy,
  add,
  update,
  remove,
  getSocWorkerStudents,
  addStudentToUser
};