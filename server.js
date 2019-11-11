const http = require('http');
const app = require('./app');

http.createServer(app).listen(3000);

console.log('I´m running');
console.log('Small chage, request-pull');


