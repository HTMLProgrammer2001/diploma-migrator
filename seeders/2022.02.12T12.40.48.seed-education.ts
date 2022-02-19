import {Migration} from '../umzug';

const data = [
  {id: 1, teacherId: 1, educationQualificationId: 2, institution: 'ONPU', speciality: 'Computer science', yearOfIssue: 2015},
  {id: 2, teacherId: 1, educationQualificationId: 3, institution: 'ONPU', speciality: 'Computer science', yearOfIssue: 2017},
  {id: 3, teacherId: 2, educationQualificationId: 1, institution: 'ONPU', speciality: 'Program engineering', yearOfIssue: 2016},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Education', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Education', {});
};
