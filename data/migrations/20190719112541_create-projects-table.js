exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("name", 100)
      .unique()
      .notNullable();
    tbl.string("desc", 250).notNullable();
    tbl.boolean("complete");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
