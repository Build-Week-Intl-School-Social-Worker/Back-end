
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('visits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        { id: 1, user_id: 3, student_id: 1, notes: "Joey is doing well" }
      ]);
    });
};
