
exports.up = function(knex) {
    return knex.schema
        .createTable("roles", tbl => {
            tbl.increments();
            tbl.string("role", 255);
    })
        .createTable("users", tbl => {
            tbl.increments();
            tbl.integer("role_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("roles")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string("name", 255)
                .notNullable();
            tbl.string("email", 255)
                .unique()
                .notNullable();
            tbl.string("phone", 255)
                .notNullable();
            tbl.string("password", 255)
                .notNullable();
            tbl.string("org_name", 255)
                .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("roles")
};
