import {Migration} from '../umzug';

const data = [
  {
    id: 1,
    userId: 1,
    title: 'Internship',
    code: 'code',
    from: '2020-03-03',
    to: '2020-04-03',
    place: 'ONPU',
    hours: 23,
    credits: 5,
    description: 'Description',
  }
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Internship', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Internship', {});
};
