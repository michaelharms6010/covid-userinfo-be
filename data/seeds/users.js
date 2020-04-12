
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {zip: "55901", username: 'larry', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"},
        {zip: "02720", username: 'curly', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"},
        {zip: "02723", username: 'moe', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"}
      ]);
    });
};
