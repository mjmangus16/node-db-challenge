exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name", 100)
        .unique()
        .notNullable();
      tbl.string("desc", 250).notNullable();
      tbl.boolean("completed").defaultTo(false);
      tbl;
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl.string("desc").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions").dropTableIfExists("projects");
};
