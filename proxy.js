// Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
var host = 'localhost';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8081;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running cors-proxy http://' + host + ':' + port);
});