'use strict';

module.exports = {
  async find(params, populate) {
    return strapi.query('useful-link').find(params, populate);
  },

  async create(data) {
    return strapi.query('useful-link').create(data);
  },

  async update(params, data) {
    return strapi.query('useful-link').update(params, data);
  },

  async delete(params) {
    return strapi.query('useful-link').delete(params);
  }
};