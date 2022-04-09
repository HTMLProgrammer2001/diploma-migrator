import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Internship', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    teacherId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Teacher', key: 'id'}, onDelete: 'CASCADE'},
    title: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    from: {type: DataTypes.DATE, allowNull: false},
    to: {type: DataTypes.DATE, allowNull: false},
    place: {type: DataTypes.STRING, allowNull: true},
    hours: {type: DataTypes.INTEGER, allowNull: false},
    credits: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    description: {type: DataTypes.TEXT, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    cascadeDeletedBy: {type: DataTypes.STRING, allowNull: true},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Internship');
};
