const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // название бд
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWPRD, // пароль
    {
        dialect: 'postgresql',
        host: process.env.DB_HOST,
        pool: process.env.DB_PORT
    }
)