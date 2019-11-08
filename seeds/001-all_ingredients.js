
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('all_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2, measurement:'kilos'},
        {recipe_id: 1, ingredient_id: 2, quantity: .4, measurement:'tablespoon'},
        {recipe_id: 2, ingredient_id: 3, quantity: 1, measurement:'kilo'},
        {recipe_id: 2, ingredient_id: 4, quantity: 1, measurement:'bag'},
        {recipe_id: 3, ingredient_id: 5, quantity: 1, measurement:'box'},
        {recipe_id: 3, ingredient_id: 6, quantity: 4, measurement:'tablespoons'}
      ]);
    });
};
