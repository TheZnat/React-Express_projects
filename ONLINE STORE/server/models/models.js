const sequelize = require('../db');
const {DataTypes} = require('sequelize') // класс для описания полей (типы данных) в бд

// описываем таблицы в бд

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER'
    }
})

const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const BasketDevice = sequelize.define('basket_device',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const Device = sequelize.define('device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const Brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})


const Rating = sequelize.define('reting', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const DeviceInfo = sequelize.define('device_info',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descriptions: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const TypeBrand = sequelize.define('type_brand',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

// приписываем связи в бд с помощью функций:
//  один ко многим: Кто.hasMany(на кого), один к одному: Кто.hasOne(на кого),
//  много ко многим: belongsToMany()
// Обратная связь кто.belongsTo(кому) принадлежит

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Brand);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through:TypeBrand});

//! sequelize сам добавляет внешние ключи автоматически

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}