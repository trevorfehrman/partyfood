const db = require('../dbConfig');

module.exports = {
  getUsers() {
    return db('users');
  },

  createUser({ username, email, password, img_url = null }) {
    console.log(username, email, password, img_url);
    return db('users')
      .returning('id')
      .insert({ username, email, password, img_url });
  }
};
