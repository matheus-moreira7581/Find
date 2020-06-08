

module.exports = {

  // conexao com o banco de dados

  development : {
    client: "pg",
    connection: {
      database: "find_db",
      user: "postgre",
      password: "db123"
    }
  },
  migrations: {
    directory: `${__dirname}/src/database/migrations`
  }
};
