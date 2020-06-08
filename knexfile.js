// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "postgres",
      password: "db123",
      database: "find_db"
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    }
  }
};