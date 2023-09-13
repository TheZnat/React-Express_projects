require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middliware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express(); // создание приложение на express
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// обработка ошибок
app.use(errorHandler);


app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!!'})
})
const start = async () =>{ // функция для подключения к базе данных
    try {
        await sequelize.authenticate() // подключение к бд
        await sequelize.sync() // сверяет состояние базы данных со схемой данных
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

    } catch (er) {
        console.log(er)

    }
}

start()

