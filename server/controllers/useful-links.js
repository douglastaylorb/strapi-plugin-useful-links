'use strict';

module.exports = {
  async find(ctx) {
    const links = await strapi.services['useful-link'].find();
    ctx.send(links);
  },

  async create(ctx) {
    const link = await strapi.services['useful-link'].create(ctx.request.body);
    ctx.send(link);
  },

  async update(ctx) {
    const { id } = ctx.params;
    const updatedLink = await strapi.services['useful-link'].update({ id }, ctx.request.body);
    ctx.send(updatedLink);
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deletedLink = await strapi.services['useful-link'].delete({ id });
    ctx.send(deletedLink);
  }
};