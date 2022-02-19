import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Education', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    teacherId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Teacher', key: 'id'}, onDelete: 'CASCADE'},
    educationQualificationId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'EducationQualification', key: 'id'}, onDelete: 'CASCADE'},
    institution: {type: DataTypes.STRING, allowNull: false},
    speciality: {type: DataTypes.STRING, allowNull: false},
    yearOfIssue: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    cascadeDeletedBy: {type: DataTypes.STRING, allowNull: true},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Education');
};
