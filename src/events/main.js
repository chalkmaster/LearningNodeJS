var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected(){
    console.log("Connected");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connect', connectionHandler);

eventEmitter.on('data_received', function(){
    console.log('all data received');
})

eventEmitter.emit('connect');