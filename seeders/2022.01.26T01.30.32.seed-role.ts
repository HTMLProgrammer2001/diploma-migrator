import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Admin'},
  {id: 2, name: 'Moderator'},
  {id: 3, name: 'Viewer'}
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Roles', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Roles', {id: data.map(el => el.id)});
};
