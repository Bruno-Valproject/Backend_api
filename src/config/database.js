import process from 'process'

const development = {
  "username": process.env.DATABASE_USERNAME || 'root',
  "password": process.env.DATABASE_PASSWORD || '',
  "database": process.env.DATABASE_NAME || 'backend_api',
  "host": process.env.DATABASE_HOST || 'localhost',
  "dialect": process.env.DATABASE_DIALECT || 'mysql',
  "port": process.env.DATABASE_PORT || '3306',
}

const production = {
  "username": process.env.DATABASE_USERNAME || 'root',
  "password": process.env.DATABASE_PASSWORD || '',
  "database": process.env.DATABASE_NAME || 'backend_api_prod',
  "host": process.env.DATABASE_HOST || 'localhost',
  "dialect": process.env.DATABASE_DIALECT || 'mysql',
  "port": process.env.DATABASE_PORT || '3306',
}


let databaseOptions;

process.env.PRODUCTION ? databaseOptions = production : databaseOptions = development;

export default databaseOptions;
