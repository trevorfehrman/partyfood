exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partyNeeds')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('partyNeeds').insert([
        {
          party_id: 1,
          need: 'Burgers',
          priority: 1,
          quantity: 4,
          quantity_unit: 'lbs.',
          notes: '80/20 if possible thaaankssss',
          fulfilled: false,
          defined: true
        },
        {
          party_id: 1,
          need: 'Burger Buns',
          priority: 1,
          quantity: 2,
          quantity_unit: 'bags',
          notes: 'Brioche from Acme',
          fulfilled: false,
          defined: true
        },
        {
          party_id: 1,
          need: 'Side Dish',
          priority: 2,
          quantity: 8,
          quantity_unit: 'servings',
          notes: "Whatever y'all want",
          fulfilled: false,
          definied: false
        },
        {
          party_id: 1,
          need: 'Side Dish',
          priority: 2,
          quantity: 8,
          quantity_unit: 'servings',
          notes: "Whatever y'all want",
          fulfilled: false,
          definied: false
        },
        {
          party_id: 1,
          need: 'Potato Salad',
          priority: 2,
          quantity: 2,
          quantity_unit: 'lbs',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Corn on the Cobb',
          priority: 2,
          quantity: 3,
          quantity_unit: 'lbs.',
          notes: 'Mexican market on San Pablo has fresh stuff',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Tequila',
          priority: 3,
          quantity: 1,
          quantity_unit: 'bottle',
          notes: 'Marghariiiityaassqueen',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Beer',
          priority: 3,
          quantity: 3,
          quantity_unit: 'cases',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'White Wine',
          priority: 3,
          quantity: 4,
          quantity_unit: 'bottles',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Potato Chips',
          priority: 4,
          quantity: 4,
          quantity_unit: 'bags',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Pretzels',
          priority: 4,
          quantity: 2,
          quantity_unit: 'bags',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Popsicles',
          priority: 5,
          quantity: 1,
          quantity_unit: 'box',
          notes: 'Bomb Pops?!!?',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Cherry Pie',
          priority: 5,
          quantity: 1,
          quantity_unit: '',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Limes',
          priority: 6,
          quantity: 1,
          quantity_unit: 'bag',
          notes: '',
          fulfilled: false,
          definied: true
        },
        {
          party_id: 1,
          need: 'Paper Plates',
          priority: 6,
          quantity: 1,
          quantity_unit: 'package',
          notes: '',
          fulfilled: false,
          definied: true
        }
      ]);
    });
};
