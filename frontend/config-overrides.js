const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Modifica la configuración de Webpack aquí
    if (config.devServer) {
      if (!config.devServer.setupMiddlewares) {
        config.devServer.setupMiddlewares = [];
      }
      config.devServer.setupMiddlewares.push((middlewares) => {
        // Modifica los middlewares aquí si es necesario
        return middlewares;
      });
    }
    return config;
  }
);
