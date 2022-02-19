import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Специалист'},
  {id: 2, name: 'Специалист 2 категории'},
  {id: 3, name: 'Специалист 1 категории'},
  {id: 4, name: 'Специалист высшей категории'}
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Category', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Category', {});
};
