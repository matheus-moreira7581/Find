// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "postgres",
      password: "root",
      database: "find_db"
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: `${__dirname}/src/database/migrations`,
      },
    seeds: {
        directory: `${__dirname}/src/database/seeds`,
      },
  },
};