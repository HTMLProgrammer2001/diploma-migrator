import {SequelizeStorage, Umzug} from 'umzug';
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 31634,
  username: 'root',
  password: 'root',
  database: 'app'
});
// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'app'
// });

export const migrator = new Umzug({
  migrations: {
    glob: ['migrations/*.ts', {cwd: __dirname}],
  },
  context: sequelize,
  storage: new SequelizeStorage({sequelize}),
  logger: console,
});

export type Migration = typeof migrator._types.migration;

export const seeder = new Umzug({
  migrations: {
    glob: ['seeders/*.ts', {cwd: __dirname}],
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'seeder_meta',
  }),
  logger: console,
});

export type Seeder = typeof seeder._types.migration;