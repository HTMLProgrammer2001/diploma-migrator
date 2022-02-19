import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Teacher', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    fullName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    birthday: {type: DataTypes.DATE, allowNull: true},
    phone: {type: DataTypes.STRING, allowNull: true, unique: true},
    address: {type: DataTypes.STRING, allowNull: true},
    avatarUrl: {type: DataTypes.STRING, allowNull: true},
    departmentId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Departments', key: 'id'}, onDelete: 'CASCADE'},
    commissionId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Commissions', key: 'id'}, onDelete: 'CASCADE'},
    teacherRankId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'TeachingRank', key: 'id'}, onDelete: 'CASCADE'},
    academicDegreeId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'AcademicDegree', key: 'id'}, onDelete: 'CASCADE'},
    academicTitleId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'AcademicTitle', key: 'id'}, onDelete: 'CASCADE'},
    workStartDate: {type: DataTypes.DATE, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    cascadeDeletedBy: {type: DataTypes.STRING, allowNull: true},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Teacher');
};
