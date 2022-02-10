import {Migration} from '../umzug';

const data = [
  {
    id: 1,
    title: "Test publication",
    date: "2020-03-03",
    publisher: "News Times",
    description: "Test description",
    url: "https://google.com",
    anotherAuthors: "Cat and dog"
  }
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Publication', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Publication', {});
};
