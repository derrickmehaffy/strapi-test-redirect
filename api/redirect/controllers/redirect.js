"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async redirect(ctx) {
    const params = ctx.params;

    if (params.uid) {
      let data = await strapi
        .query("redirect")
        .findOne({ short_code: params.uid });

      if (data.redirect_url) {
        return ctx.redirect(data.redirect_url);
      }
    }

    return ctx.redirect("https://strapi.io/404");
  },
};
