const db = require('../dbConfig');

module.exports = {
  getUsers() {
    return db('users');
  },

  createUser({ username, email, password, img_url = null }) {
    return db('users')
      .returning('id')
      .insert({ username, email, password, img_url });
  },

  deleteUser(id) {
    return db('users')
      .where({ id })
      .del();
  },

  async updateUser({ username, email, password, img_url }, id) {
    let user = await db('users').where({ id });

    username = username || user.username;
    email = email || user.email;
    password = password || user.password;
    img_url = img_url || user.img_url;

    return db('users')
      .where({ id })
      .returning('id')
      .update({ username, email, password, img_url });
  }
};
