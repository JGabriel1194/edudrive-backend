'use strict';

/**
 * parallel controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::parallel.parallel');
