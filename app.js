
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var http = require('http');
 var path = require('path');



 var app = express()
 , http = require('http')
 , server = http.createServer(app)
 , io = require('socket.io').listen(server);


// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);



server.listen(4000);

io.sockets.on('connection', function (socket) { // the actual socket callback
	socket.emit('connected');
    globalSocket = socket;
    console.log("socket on connection");

});
        



