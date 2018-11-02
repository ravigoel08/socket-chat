var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){       routing url to /
    //res.send("<h1>Hello World!</h1>");        rendering html 
//});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
var msgg = "welcome to chat";
io.on('connection', function(socket){
    //console.log('a user connected');   //to show on console if a user connects or disconnect
    //socket.on('disconnect', function(){
        //console.log('user disconnected');
    //});
    socket.on('chat message', function(msg){
        //console.log('message:' + msg);    to show message on console
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});