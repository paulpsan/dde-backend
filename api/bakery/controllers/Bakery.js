'use strict';

/**
 * Bakery.js controller
 *
 * @description: A set of functions called "actions" for managing `Bakery`.
 */

module.exports = {

  /**
   * Retrieve bakery records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bakery.search(ctx.query);
    } else {
      return strapi.services.bakery.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bakery record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bakery.fetch(ctx.params);
  },

  /**
   * Count bakery records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bakery.count(ctx.query);
  },

  /**
   * Create a/an bakery record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bakery.add(ctx.request.body);
  },

  /**
   * Update a/an bakery record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bakery.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bakery record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bakery.remove(ctx.params);
  }
};
