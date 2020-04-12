
exports.up = function(knex) {
  return knex.schema.createTable('health_data', healthData => {
    healthData.increments();
    
    healthData.string('health_data', 2048)
      .notNullable()
      healthData.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
   
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('health_data')
};
