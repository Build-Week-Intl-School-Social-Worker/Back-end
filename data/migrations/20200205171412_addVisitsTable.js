
exports.up = function(knex) {
    return knex.schema
        .createTable("visits", tbl => {
            tbl.increments();

            tbl.integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.integer("student_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("students")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string("notes", 1500)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("visits");
};
