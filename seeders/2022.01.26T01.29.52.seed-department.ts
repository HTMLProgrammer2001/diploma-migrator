import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Department 1'},
  {id: 2, name: 'Department 2'}
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Departments', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Departments', {id: data.map(el => el.id)});
};
