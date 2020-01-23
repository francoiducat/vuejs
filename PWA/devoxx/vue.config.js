const WorkboxPlugin = require("workbox-webpack-plugin")


module.exports = {
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        swDest: "service-worker.js",
        // Define runtime caching rules.
        runtimeCaching: [{
          urlPattern: new RegExp('^https://cfp\.devoxx\.fr'),
          handler: 'staleWhileRevalidate',
        }],
        clientsClaim: true,
        skipWaiting:true
      })
    ]
  }
}
