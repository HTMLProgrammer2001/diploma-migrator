import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Кандидат наук'},
  {id: 2, name: 'Доктор наук'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('AcademicTitle', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('AcademicTitle', {id: data.map(el => el.id)});
};
