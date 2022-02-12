import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Младший специалист'},
  {id: 2, name: 'Бакалавр'},
  {id: 2, name: 'Магистр'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('EducationQualification', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('EducationQualification', {});
};
