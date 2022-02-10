import {Migration} from '../umzug';
import {DataTypes, Sequelize} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('Teacher', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    fullName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATE, allowNull: true},
    phone: {type: DataTypes.STRING, allowNull: true},
    address: {type: DataTypes.STRING, allowNull: true},
    avatarUrl: {type: DataTypes.STRING, allowNull: true},
    departmentId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Departments', key: 'id'}},
    commissionId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Commissions', key: 'id'}},
    teacherRankId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'TeachingRank', key: 'id'}},
    academicDegreeId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'AcademicDegree', key: 'id'}},
    academicTitleId: {type: DataTypes.INTEGER, allowNull: true, references: {model: 'AcademicTitle', key: 'id'}},
    workStartDate: {type: DataTypes.DATE, allowNull: true},
    isDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    guid: {type: DataTypes.STRING, defaultValue: Sequelize.fn('UUID')}
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('Teacher');
};
