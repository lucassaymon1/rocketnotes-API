exports.up = knex => knex.schema.createTable("tags", table => {
  // const {text, increments, integer} = table
  
  table.increments("id")
  // do not accept null value as attribute
  table.text("name").notNullable
  //delete this table if table with note_id is deleted
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE")
  table.integer("user_id").references("id").inTable("users")
});

exports.down = knex => knex.schema.dropTable("tags")
