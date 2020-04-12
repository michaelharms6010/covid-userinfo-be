
exports.up = function(knex) {
  return knex.schema.createTable('health_data', healthData => {
    healthData.increments();
    
    healthData.decimal('temperature')
      .notNullable()
    healthData.boolean("lost_sense_of_smell")
    healthData.boolean("cough")
    healthData.boolean("tight_chest")
    healthData.boolean("aches")
    healthData.integer('symptom_count')
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
