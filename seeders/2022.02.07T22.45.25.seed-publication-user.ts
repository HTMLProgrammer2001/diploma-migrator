import {Migration} from '../umzug';

const data = [
  {
    userId: 1,
    publicationId: 1
  },
  {
    userId: 2,
    publicationId: 1
  }
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('PublicationUser', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('PublicationUser', {});
};
