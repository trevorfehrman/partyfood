require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: 5433,
      host: 'localhost',
      user: 'trevorfehrman',
      database: 'template1'
    },

    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './db/seeds',
      tableName: 'dbseeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    }
  }
};
