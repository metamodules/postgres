# PostgreSQL Meta-Module ![CircleCI](https://img.shields.io/circleci/build/github/nodeapp-metamodules/redis.svg) [![npm version](https://img.shields.io/npm/v/redis.svg)](https://www.npmjs.com/package/@nodeapp/redis)

For use with [create-node-app](https://github.com/kubesail/create-node-app) and [deploy-node-app](https://github.com/kubesail/deploy-node-app)

To add this metamodule to your project:

```js
const postgres = require('@nodeapp/postgres')()

postgres.query('SELECT 1+1', (err, resp) => {
  console.log('postgres output:', err, resp)
})
```

This is simple wrapper around the [node_redis](https://github.com/brianc/node-postgres) module which includes the latest stable Postgres image
