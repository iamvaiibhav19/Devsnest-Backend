const { sequelize } = require('sequelize');

const sequelize = new sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect:"postgres"
    }
)
sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection set');
    }
    catch {
        console.error('unable to connect');
    }
})();
module.exports = sequelize;