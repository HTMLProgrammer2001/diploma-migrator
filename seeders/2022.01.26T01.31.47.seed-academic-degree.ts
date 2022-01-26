import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Доцент'},
  {id: 2, name: 'Старший исследователь'},
  {id: 3, name: 'Профессор'}
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('AcademicDegree', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('AcademicDegree', {id: data.map(el => el.id)});
};
