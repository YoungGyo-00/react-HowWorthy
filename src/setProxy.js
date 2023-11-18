const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.35.110.165:8080',
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware('/', {
      target: 'http://3.35.110.165:5000',
      changeOrigin: true,
    }),
  );
};
