import {Migration} from '../umzug';

const data = [
  {
    teacherId: 1,
    publicationId: 1
  },
  {
    teacherId: 2,
    publicationId: 1
  }
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('PublicationTeacher', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('PublicationTeacher', {});
};
