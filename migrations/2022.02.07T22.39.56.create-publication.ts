import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Publication', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    publisher: {type: DataTypes.STRING, allowNull: true},
    url: {type: DataTypes.STRING, allowNull: true},
    date: {type: DataTypes.DATE, allowNull: false},
    anotherAuthors: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Publication');
};
