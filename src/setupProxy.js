
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware( '/category',{
      target: 'http://localhost:9999',
      changeOrigin: true
    })
  )
}