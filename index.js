'use strict'

module.exports = ({ logger = console } = {}) => ({
  before: (handler, next) => {
    const { event, context } = handler
    logger.debug({ event, context }, 'Before handler')
    return next()
  },
  after: (handler, next) => {
    const { response } = handler
    logger.debug({ response }, 'After handler')
    return next()
  },
  onError: (handler, next) => {
    const { error: err } = handler
    logger.error({ err }, 'Error in handler')
    return next()
  }
})
