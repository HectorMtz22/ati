module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ati/" : "/",

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },

  lintOnSave: false
};
