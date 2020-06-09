// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "seu_usuario",
      password: "sua_senha",
      database: "find_db"
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }
};