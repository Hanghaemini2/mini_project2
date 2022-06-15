const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/login', {
			target: 'http://15.164.218.19', 
			changeOrigin: true,
		})
	);
    app.use(
		createProxyMiddleware('/login', {
			target: 'http://15.164.218.19', 
			changeOrigin: true,
		})
	);
};