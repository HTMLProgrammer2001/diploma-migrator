import {Migration} from '../umzug';

export const up: Migration = async ({context: sequelize}) => {
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('RefreshToken', {});
};
