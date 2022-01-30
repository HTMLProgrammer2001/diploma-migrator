import {Migration} from '../umzug';

const data = [
  {
    id: 1,
    fullName: 'Юрий Присяжный',
    email: 'cssuperpy@gmail.com',
    phone: '+380666876892',
    roleId: 1,
    passwordHash: '$2b$10$CtLZW0wAY5nv1D72dv5w/uQxPYVMpUqofZORTa.tZ0yLbQgy.pY1u'},
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('User', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('User', {id: data.map(el => el.id)});
};
