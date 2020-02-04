
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Brad Man', role_id: 1, email: "brad@man.com", phone: "515-784-2738", password: "Unprotected", org_name: "Hogwarts"},
        {id: 2, name: 'Tom Dude', role_id: 1, email: "tom@dude.com", phone: "706-859-5784", password: "Unprotected-2", org_name: "Hogwarts"},
      ]);
    });
};
