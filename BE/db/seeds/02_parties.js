exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parties')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('parties').insert([
        {
          id: 1,
          name: "Trevor's Bday",
          host: 2,
          date: 'July 14th',
          time: 'noon',
          location: "Trevor's Place",
          description:
            'Id irure officia incididunt id. Ad ad pariatur enim cupidatat dolore qui aliqua laborum quis officia. Et esse incididunt dolore anim et ad esse.',
          image:
            'https://images.unsplash.com/photo-1554126196-3bdaba97491c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
        },
        {
          id: 2,
          name: "bblo's bday",
          host: 1,
          date: 'May 6th',
          time: 'midnight',
          location: "bblo's place",
          description:
            'Elit pariatur veniam aliqua irure duis ut nulla ipsum sint consectetur id qui nostrud ut. Ex laboris est proident adipisicing. Do voluptate non elit adipisicing pariatur. Reprehenderit dolore commodo officia ad nisi irure officia. Veniam minim laborum tempor qui amet enim veniam pariatur reprehenderit nisi sit et magna quis. Esse cillum magna excepteur sint duis deserunt occaecat dolore nulla.',
          image:
            'https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
        }
      ]);
    });
};
