import {Migration} from '../umzug';

const data = [
  {
    id: 1,
    fullName: 'Юрий Присяжный',
    email: 'cssuperpy@gmail.com',
    phone: '+380666876892',
    roleId: 1,
    passwordHash: '$2b$10$msBRTvVYHbLPuUnf3ZjYsOkkT8Yddob2PMT6pejsvT/3Y5aCYD6nK'
  },
  {
    id: 2,
    fullName: 'Test',
    email: 'test@gmail.com',
    phone: '+380666376892',
    roleId: 1,
    passwordHash: '$2b$10$msBRTvVYHbLPuUnf3ZjYsOkkT8Yddob2PMT6pejsvT/3Y5aCYD6nK'
  },
];

export const up: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkInsert('User', data);
};

export const down: Migration = async ({context: sequelize}) => {
  await sequelize.getQueryInterface().bulkDelete('User', {});
};
