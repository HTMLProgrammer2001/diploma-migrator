import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Attestation', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    categoryId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Category', key: 'id'}},
    userId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'User', key: 'id'}},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, unique: true, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Attestation');
};
