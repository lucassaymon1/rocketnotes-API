exports.up = knex => knex.schema.createTable("notes", table => {
  // structure: table.type("name")
  table.increments("id")
  table.text("title")
  table.text("description")
  //user id in table referenced by the user id in table "users"
  table.integer("user_id").references("id").inTable("users")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("notes");
