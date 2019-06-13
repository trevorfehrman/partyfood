exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Trevor',
          email: 'trevorfehrman@gmail.com',
          password: 'password',
          img_url:
            'https://lh4.googleusercontent.com/-fN30Mds67d0/AAAAAAAAAAI/AAAAAAAALjI/wifvw7Kybj4/photo.jpg'
        },
        {
          id: 2,
          username: 'Lauren',
          email: 'laurenworthington@gmail.com',
          password: 'password',
          img_url: 'https://avatars2.githubusercontent.com/u/35212660?s=460&v=4'
        },
        {
          id: 3,
          username: 'Holden',
          email: 'holdenbucher@gmail.com',
          password: 'password',
          img_url: 'https://avatars1.githubusercontent.com/u/43684125?s=460&v=4'
        },
        {
          id: 4,
          username: 'Yasirah',
          email: 'yasirahkrueng@gmail.com',
          password: 'password',
          img_url: 'https://avatars2.githubusercontent.com/u/43505793?s=460&v=4'
        },
        {
          id: 5,
          username: 'Eileen',
          email: 'eileencuevas@gmail.com',
          password: 'password',
          img_url: 'https://avatars0.githubusercontent.com/u/35715213?s=460&v=4'
        },
        {
          id: 6,
          username: 'Tyrone',
          email: 'TyroneCartwright@gmail.com',
          password: 'password',
          img_url: 'https://pbs.twimg.com/profile_images/976621673897189377/U-vNuqLd_400x400.jpg'
        },
        {
          id: 7,
          username: 'Jarrad',
          email: 'jarradmiller@gmail.com',
          password: 'password',
          img_url:
            'https://media.licdn.com/dms/image/C5603AQGnqOEovwulKg/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=rgVxOE2G746YSEbkx4x626OHlxydySho69fGhDZziUU'
        },
        {
          id: 8,
          username: 'Nedim',
          email: 'nedimomervic@gmail.com',
          password: 'password',
          img_url:
            'https://media.licdn.com/dms/image/C4D03AQHlxUevJQko3A/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=zJm6TOsmanlpo8cuHo33BQLj2ckqBDjQErU-Wt3yaDg'
        },
        {
          id: 9,
          username: 'Kai',
          email: 'kailovingfoss@gmail.com',
          password: 'password',
          img_url: 'https://avatars1.githubusercontent.com/u/32802660?s=460&v=4'
        }
      ]);
    });
};
