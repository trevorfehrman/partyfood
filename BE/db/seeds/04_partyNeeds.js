exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partyNeeds')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('partyNeeds').insert([
        {
          id: 1,
          party_id: 1,
          need: 'Burgers',
          priority: 1,
          quantity: 4,
          quantity_fulfilled: 4,
          quantity_unit: 'lbs.',
          notes: '80/20 if possible thaaankssss',
          defined: true
        },
        {
          id: 2,
          party_id: 1,
          need: 'Burger Buns',
          priority: 1,
          quantity: 2,
          quantity_fulfilled: 2,
          quantity_unit: 'bags',
          notes: 'Brioche from Acme',
          defined: true
        },
        {
          id: 3,
          party_id: 1,
          need: 'Side Dish',
          priority: 2,
          quantity: 8,
          quantity_fulfilled: 0,
          quantity_unit: 'servings',
          notes: "Whatever y'all want",
          defined: false
        },
        {
          id: 4,
          party_id: 1,
          need: 'Side Dish',
          priority: 2,
          quantity: 8,
          quantity_fulfilled: 0,
          quantity_unit: 'servings',
          notes: "Whatever y'all want",
          defined: false
        },
        {
          id: 5,
          party_id: 1,
          need: 'Potato Salad',
          priority: 2,
          quantity: 2,
          quantity_fulfilled: 1,
          quantity_unit: 'lbs',
          notes: '',
          defined: true
        },
        {
          id: 6,
          party_id: 1,
          need: 'Corn on the Cobb',
          priority: 2,
          quantity: 3,
          quantity_fulfilled: 0,
          quantity_unit: 'lbs.',
          notes: 'Mexican market on San Pablo has fresh stuff',
          defined: true
        },
        {
          id: 7,
          party_id: 1,
          need: 'Tequila',
          priority: 3,
          quantity: 1,
          quantity_fulfilled: 1,
          quantity_unit: 'bottle',
          notes: 'Marghariiiityaassqueen',
          defined: true
        },
        {
          id: 8,
          party_id: 1,
          need: 'Beer',
          priority: 3,
          quantity: 4,
          quantity_fulfilled: 3,
          quantity_unit: 'cases',
          notes: '',
          defined: true
        },
        {
          id: 9,
          party_id: 1,
          need: 'White Wine',
          priority: 3,
          quantity: 4,
          quantity_fulfilled: 0,
          quantity_unit: 'bottles',
          notes: '',
          defined: true
        },
        {
          id: 10,
          party_id: 1,
          need: 'Potato Chips',
          priority: 4,
          quantity: 4,
          quantity_fulfilled: 1,
          quantity_unit: 'bags',
          notes: '',
          defined: true
        },
        {
          id: 11,
          party_id: 1,
          need: 'Pretzels',
          priority: 4,
          quantity: 2,
          quantity_fulfilled: 2,
          quantity_unit: 'bags',
          notes: '',
          defined: true
        },
        {
          id: 12,
          party_id: 1,
          need: 'Popsicles',
          priority: 5,
          quantity: 1,
          quantity_fulfilled: 0,
          quantity_unit: 'box',
          notes: 'Bomb Pops?!!?',
          defined: true
        },
        {
          id: 13,
          party_id: 1,
          need: 'Cherry Pie',
          priority: 5,
          quantity: 1,
          quantity_fulfilled: 1,
          quantity_unit: '',
          notes: '',
          defined: true
        },
        {
          id: 14,
          party_id: 1,
          need: 'Limes',
          priority: 6,
          quantity: 1,
          quantity_fulfilled: 0,
          quantity_unit: 'bag',
          notes: '',
          defined: true
        },
        {
          id: 15,
          party_id: 1,
          need: 'Paper Plates',
          priority: 6,
          quantity: 1,
          quantity_fulfilled: 1,
          quantity_unit: 'package',
          notes: '',
          defined: true
        }
      ]);
    });
};
