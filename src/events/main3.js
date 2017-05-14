var events = require('events');
var eventEmitter = new events.EventEmitter();

var listner1 = function(){ console.log("Listner 1 executado"); }
var listner2 = function(){ console.log("Listner 2 executado"); }

eventEmitter.addListener('onConnect', listner1);
eventEmitter.on('onConnect', listner2);

var count = events.EventEmitter.listenerCount(eventEmitter, 'onConnect');
console.log(count + ' events for onConnect');

eventEmitter.emit('onConnect');

eventEmitter.removeListener('onConnect', listner1);

count = events.EventEmitter.listenerCount(eventEmitter, 'onConnect');
console.log(count + ' events for onConnect');

eventEmitter.emit('onConnect');

console.log('app end');