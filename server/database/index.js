require('dotenv').config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_DIALECT = 'mariadb',
  DB_LOGGING = false
} = process.env

module.exports = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  seederStorage: 'sequelize',
  logging: DB_LOGGING,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  }
}
