import {Migration} from '../umzug';
import {DataTypes} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('PublicationTeacher', {
    teacherId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Teacher', key: 'id'}, onDelete: 'CASCADE'},
    publicationId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Publication', key: 'id'}, onDelete: 'CASCADE'},
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('PublicationTeacher');
};
