import {Migration} from '../umzug';

const data = [
  {id: 1, name: 'Старший преподаватель'},
  {id: 2, name: 'Преподаватель-методист'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('TeachingRank', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('TeachingRank', {id: data.map(el => el.id)});
};
