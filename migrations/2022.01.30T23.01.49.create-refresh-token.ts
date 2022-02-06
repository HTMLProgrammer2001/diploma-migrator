import {Migration} from '../umzug';
import Sequelize, {DataTypes} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('RefreshToken', {
    sessionCode: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    userId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'User', key: 'id'}},
    creationTime: {type: DataTypes.DATE, defaultValue: Sequelize.NOW},
    expirationTime: {type: DataTypes.DATE}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('RefreshToken');
};
