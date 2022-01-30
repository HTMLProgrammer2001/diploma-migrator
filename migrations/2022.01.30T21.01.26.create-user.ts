import {Migration} from '../umzug';
import Sequelize, {DataTypes} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('User', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    fullName: {type: DataTypes.STRING, allowNull: false},
    roleId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Roles', key: 'id'}},
    email: {type: DataTypes.STRING, allowNull: false},
    passwordHash: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: true},
    avatarUrl: {type: DataTypes.STRING, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('User');
};
