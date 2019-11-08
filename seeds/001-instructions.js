
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, instructions: 'bake for 45 minutes'},
        {recipe_id: 1, step_number: 2, instructions: 'add spicy sauce'},
        {recipe_id: 2, step_number: 1, instructions: 'mix acai and granola'},
        {recipe_id: 2, step_number: 2, instructions: 'Eat'},
        {recipe_id: 3, step_number: 1, instructions: 'boil noodles'},
        {recipe_id: 3, step_number: 2, instructions: 'add salt'}
      ]);
    });
};
