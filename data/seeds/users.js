
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'larry', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"},
        {username: 'curly', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"},
        {username: 'moe', password: "$2a$10$.ytuV5I5RhtpdHPRtO93nuayb1KsZdkjP5zYSQXgbvwYoSHyY0.wi"}
      ]);
    });
};
