// @flow

const crypto = require('crypto')
let POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
if (!POSTGRES_PASSWORD) {
  const buf = Buffer.alloc(10)
  POSTGRES_PASSWORD = crypto.randomFillSync(buf).toString('hex')
}

module.exports = {
  POSTGRES_SERVICE_HOST: process.env.POSTGRES_SERVICE_HOST || 'postgres',
  POSTGRES_SERVICE_PORT: process.env.POSTGRES_SERVICE_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB || 'postgres'
}
