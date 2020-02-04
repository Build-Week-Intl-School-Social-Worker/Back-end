
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, role: 'admin'},
        {id: 2, role: 'soc_worker'}
      ]);
    });
};
