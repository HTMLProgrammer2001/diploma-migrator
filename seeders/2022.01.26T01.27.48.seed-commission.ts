import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Commission 1'},
  {id: 2, name: 'Commission 2'}
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Commissions', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Commissions', {});
};
