const server = require('./src/services/server.js');
const dbconfig = require('./src/configs/db.init.js');

server.init();
dbconfig.init();