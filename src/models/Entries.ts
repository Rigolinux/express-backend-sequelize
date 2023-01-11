
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/conect';

export const entries =sequelize.define('entries', {

    id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: DataTypes.DATE,
    text: DataTypes.STRING,
    picture: DataTypes.STRING,
})


