'use strict';

/**
 * parallel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parallel.parallel');
