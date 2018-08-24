'use strict';

/**
 * Articulo.js controller
 *
 * @description: A set of functions called "actions" for managing `Articulo`.
 */

module.exports = {

  /**
   * Retrieve articulo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.articulo.search(ctx.query);
    } else {
      return strapi.services.articulo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a articulo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.articulo.fetch(ctx.params);
  },

  /**
   * Count articulo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.articulo.count(ctx.query);
  },

  /**
   * Create a/an articulo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.articulo.add(ctx.request.body);
  },

  /**
   * Update a/an articulo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.articulo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an articulo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.articulo.remove(ctx.params);
  }
};
