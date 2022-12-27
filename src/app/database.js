
const {Sequelize, Model, DataTypes} = require('sequelize');


  


 const connect = async (setting) => {
    const sequelize = new Sequelize(setting.database,setting.username, setting.password, {
        host: setting.host,
        dialect: 'mysql',
    });
    
    try {
        const connect =await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return connect
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = {
    connect
}