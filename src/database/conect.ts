import * as Sequelize from 'sequelize';

const sequelize = new Sequelize.Sequelize(
    'database', 
    'user', 
    'password',
     {
        host: 'localhost',
        dialect: 'mysql'
        
    }
);


export default sequelize;
