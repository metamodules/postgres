// @flow

module.exports = {
  POSTGRES_SERVICE_HOST: process.env.POSTGRES_SERVICE_HOST || 'postgres',
  POSTGRES_SERVICE_PORT: process.env.POSTGRES_SERVICE_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER || '',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
  POSTGRES_DB: process.env.POSTGRES_DB || ''
}
