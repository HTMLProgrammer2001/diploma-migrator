import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Rebuke', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    teacherId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Teacher', key: 'id'}, onDelete: 'CASCADE'},
    title: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    orderNumber: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    cascadeDeletedBy: {type: DataTypes.STRING, allowNull: true},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Rebuke');
};
