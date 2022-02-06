import {Migration} from '../umzug';

const data = [
  {id: 1, fullName: 'Юрий Присяжный', email: 'cssuperpy@gmail.com',
    birthday: '2001-03-20', phone: '+380666876892', departmentId: 1, commissionId: 1, teacherRankId: 1},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('Teacher', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('Teacher', {});
};
