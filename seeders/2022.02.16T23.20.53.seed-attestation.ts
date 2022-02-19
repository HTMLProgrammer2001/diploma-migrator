import {Migration} from '../umzug';

const data = [
  {id: 1, categoryId: 1, date: '2010-01-01', teacherId: 1},
  {id: 2, categoryId: 2, date: '2015-01-01', teacherId: 1},
  {id: 3, categoryId: 3, date: '2020-01-01', teacherId: 1},
  {id: 4, categoryId: 1, date: '2020-01-01', teacherId: 2},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Attestation', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Attestation', {});
};
