
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wordlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('wordlists').insert([
        {approved: true, user_id: 1, title: "Some Words", wordlist: 'the,quick,brown,fox,jumped,over,the,lazy,dog,furthermore,both,were,good,boys'},
        {approved: true, user_id: 2, title: "Tech Tools", wordlist: 'javascript,html,sass,nodejs,nodemon,express,reactjs,contextapi,jsonwebtoken'},
        {approved: true, user_id: 3, title: "Names", wordlist: 'brian,michael,emily,kristi,shya,catherine,webpt11,dreamteam'}
      ]);
    });
};
