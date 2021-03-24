import { Sequelize } from 'sequelize'
import databaseOptions from '../config/database'

const sequelize = new Sequelize(databaseOptions.database, databaseOptions.username, databaseOptions.password, {
  host: databaseOptions.host,
  dialect: databaseOptions.dialect,
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});