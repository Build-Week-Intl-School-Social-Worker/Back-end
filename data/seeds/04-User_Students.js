
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_students').insert([
        {id: 1, user_id: 1, student_id: 1},
        { id: 2, user_id: 2, student_id: 1 },
        { id: 3, user_id: 3, student_id: 1 }
      ]);
    });
};
