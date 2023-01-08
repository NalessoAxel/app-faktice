'use strict';

/**
 * release-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::release-page.release-page');
