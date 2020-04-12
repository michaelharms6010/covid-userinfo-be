
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('health_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('health_data').insert([
        {temperature: 98.8, lost_sense_of_smell: true, user_id: 1, cough: false, tight_chest: false, aches: false},
        {temperature: 98.8, lost_sense_of_smell: true, user_id: 2, cough: false, tight_chest: false, aches: false},
        {temperature: 98.8, lost_sense_of_smell: true, user_id: 3, cough: false, tight_chest: false, aches: false}
      ]);
    });
};
