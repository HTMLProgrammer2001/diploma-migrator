import {Migration} from '../umzug';

const data = [
  {
    id: 1,
    teacherId: 1,
    title: "Test rebuke",
    date: "2020-03-03",
    orderNumber: "12342132",
    description: "Test description",
    isActive: true
  }
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Rebuke', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Rebuke', {});
};
