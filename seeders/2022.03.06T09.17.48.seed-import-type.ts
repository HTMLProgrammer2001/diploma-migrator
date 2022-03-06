import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Users'},
  {id: 2, name: 'Teachers'},
  {id: 3, name: 'Internships'},
  {id: 4, name: 'Honors'},
  {id: 5, name: 'Rebukes'},
  {id: 6, name: 'Publications'},
  {id: 7, name: 'Attestations'},
  {id: 8, name: 'Educations'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('ImportType', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('ImportType', {});
};
