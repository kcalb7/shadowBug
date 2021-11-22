require('dotenv').config()

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb',
  seederStorage: 'sequelize',
  logging: process.env.DB_LOGGING === 'true' || false
}
