
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'chicken'},
        {ingredient: 'spicy sauce'},
        {ingredient:  'acai'},
        {ingredient: 'granola'},
        {ingredient: 'noodles'},
        {ingredient:  'salt'}
      ]);
    });
};
