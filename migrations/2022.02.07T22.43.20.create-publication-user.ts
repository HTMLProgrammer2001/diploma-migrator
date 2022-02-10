import {Migration} from '../umzug';
import {DataTypes} from 'sequelize';

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().createTable('PublicationUser', {
    userId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'User', key: 'id'}},
    publicationId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Publication', key: 'id'}},
  });
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().dropTable('PublicationUser');
};
