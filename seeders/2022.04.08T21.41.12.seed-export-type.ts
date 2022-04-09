import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Teacher personal info'},
  {id: 2, name: 'Teacher professional info'},
  {id: 3, name: 'Honors'},
  {id: 4, name: 'Rebukes'},
  {id: 5, name: 'Internships'},
  {id: 6, name: 'Publications'},
  {id: 7, name: 'Attestations'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('ExportType', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('ExportType', {});
};
