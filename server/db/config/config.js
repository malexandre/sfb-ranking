const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  development: {
    user: 'sfb-ranking-user',
    username: 'sfb-ranking-user',
    password: process.env.POSTGRES_PASSWORD,
    database: 'sfb-ranking',
    host: 'postgres',
    dialect: 'postgres',
    port: 5432,
  },
  test: {
    username: 'sfb-ranking-user',
    password: process.env.POSTGRES_PASSWORD,
    database: 'sfb-ranking',
    host: 'localhost',
    dialect: 'postgres',
    port: 5532,
  },
  production: {
    username: 'sfb-ranking-user',
    password: process.env.POSTGRES_PASSWORD,
    database: 'sfb-ranking',
    host: 'postgres',
    dialect: 'postgres',
    port: 5432,
  },
}
