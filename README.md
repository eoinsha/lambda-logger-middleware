# lambda-logger-middleware

[![license](https://img.shields.io/npm/l/slic-starter.svg)](./LICENSE)

A simple, configurable logging middleware for [https://middy.js.org/](Middy).

This middleware logs events and responses using your logger's `debug` function and errors using its `error` function.
The logger can be replaced (default is `console`) so you can configure your logger to log at the appropriate level.

## Installation

```
npm install lambda-logger-middleware --save
```

## Example using Pino

[http://getpino.io](Pino) is an excellent, fast, structured JSON logger. It can be configured with `lambda-logger-middleware` to only output `DEBUG` logs when you are running with `STAGE=dev` or with [https://www.npmjs.com/package/serverless-offline](serverless-offline) as follows.

```
const loggerMiddleware = require('lambda-logger-middleware')

function handler (event, context) { ... }

middy(handler)
  .use(loggerMiddleware({
    logger: pino({
      name: 'your-chosen-name',
      level: // Only output debug logs for offline and development environments
        process.env.IS_OFFLINE || process.env.STAGE === 'dev'
          ? 'debug'
          : 'info'
    })
  }))
```

