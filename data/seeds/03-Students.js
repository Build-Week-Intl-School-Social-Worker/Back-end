
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          id: 1,
          name: 'Joey B',
          age: 16,
          grade: "10th",
          image: null,
          bio: "He's a kid",
          status: "student",
          insurance_card: true,
          expire_date: "09-23-2020",
          birth_cert: true,
          special_needs: null,
          child_rep: "Mother",
          child_rep_phone: "706-482-0983",
          child_rep_email: "joeysmom@mother.com"
        }
      ]);
    });
};
