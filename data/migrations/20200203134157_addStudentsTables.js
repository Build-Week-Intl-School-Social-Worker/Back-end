
exports.up = function(knex) {
    return knex.schema
        .createTable("students", tbl => {
            tbl.increments();
            tbl.string("name", 255)
                .notNullable();
            tbl.integer("age")
                .notNullable();
            tbl.string("grade", 255)
                .notNullable();
            tbl.binary("image")
            tbl.text("bio")
                .notNullable();
            tbl.string("status", 255)
                .notNullable();
            tbl.boolean("insurance_card")
                .notNullable();
            tbl.date("expire_date")
                .notNullable();
            tbl.boolean("birth_cert")
                .notNullable();
            tbl.text("special_needs");
            tbl.string("child_rep", 255)
                .notNullable();
            tbl.string("child_rep_phone", 255);
            tbl.string("child_rep_email", 255);
        })
        .createTable("user_students", tbl => {
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
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("user_students")
        .dropTableIfExists("students")
        .dropTableIfExists("grade_levels");
};
