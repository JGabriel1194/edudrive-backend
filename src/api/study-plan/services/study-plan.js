'use strict';

/**
 * study-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-plan.study-plan');
