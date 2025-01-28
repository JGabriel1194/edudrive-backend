'use strict';

/**
 * parallel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::parallel.parallel');
