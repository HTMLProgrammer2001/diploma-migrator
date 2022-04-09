import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Attestation', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    categoryId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Category', key: 'id'}, onDelete: 'CASCADE'},
    teacherId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Teacher', key: 'id'}, onDelete: 'CASCADE'},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    cascadeDeletedBy: {type: DataTypes.STRING, allowNull: true},
    guid: {type: DataTypes.STRING, unique: true, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Attestation');
};
