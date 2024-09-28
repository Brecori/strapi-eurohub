'use strict';

/**
 * pdf-uploader service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pdf-uploader.pdf-uploader');
