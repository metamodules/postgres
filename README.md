# PostgreSQL Meta-Module ![CircleCI](https://img.shields.io/circleci/build/github/metamodules/postgres.svg) [![npm version](https://img.shields.io/npm/v/@metamodules/postgres.svg)](https://www.npmjs.com/package/@metamodules/postgres)

For use with [create-node-app](https://github.com/kubesail/create-node-app) and [deploy-node-app](https://github.com/kubesail/deploy-node-app)

To add this metamodule to your project:

```
npm install @metamodules/postgres
```

```js
const postgres = require('@metamodules/postgres')()

postgres.query('SELECT 1+1', (err, resp) => {
  console.log('postgres output:', err, resp)
})
```

This is a simple wrapper around the [node-postgres](https://github.com/brianc/node-postgres) module which includes the latest stable Postgres image
