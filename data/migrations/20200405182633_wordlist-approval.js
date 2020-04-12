
exports.up = function(knex) {
    return knex.schema.table('wordlists', function (table) {
        table.boolean("approved").defaultTo(false);
      })
};

exports.down = function(knex) {
    return knex.schema.table('wordlists', function(table){
        table.dropColumn('approved');
      })
};
