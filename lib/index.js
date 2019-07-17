// @flow

const { Pool } = require('pg')
const {
  POSTGRES_SERVICE_HOST,
  POSTGRES_SERVICE_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB
} = require('./config')
const postgresHandles = {}

module.exports = function postgres (target /*: string */, forceNew /*: boolean */ = false) {
  if (!target) {
    target = `${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_SERVICE_HOST}:${POSTGRES_SERVICE_PORT}/${POSTGRES_DB}`
  }

  if (postgresHandles[target] && !forceNew) return postgresHandles[target]

  if (target.indexOf('postgres://') !== 0) target = 'postgres://' + target

  postgresHandles[target] = new Pool({ connectionString: target })
  postgresHandles[target].connect(err => {
    if (err) {
      console.log('Error connecting to postgres!')
      throw err
    }
  })

  return postgresHandles[target]
}
