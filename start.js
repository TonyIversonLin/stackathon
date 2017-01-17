var chalk = require('chalk');
var db = require('./server/db');
var fs = require('fs');
var app = require('./server/app');
var server = require('http').createServer();

//var pass = require('./pass.js')
// var server = require('https').createServer({
// 	key: fs.readFileSync('./server.key'),
//     cert: fs.readFileSync('./server.crt'),
//     passphrase: pass.passphrase,
//     requestCert: false,
//     rejectUnauthorized: false
// });

db.sync()
.then(function () {
  server.on('request', app);
})
.then(function () {
  var PORT = 1337;
  server.listen(PORT, function () {
    console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
  });
})
.catch(function (err) {
  console.error(chalk.red(err.stack));
})
