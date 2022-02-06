import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('TeachingRank', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, unique: true, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('TeachingRank');
};
