var moment = require('moment');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var ping = function() {
    console.log('Ping!-- Count: ' + i + " Time: " + moment().format('hh/mm/ss'));
}

var pong = function() {
    console.log('Pong!-- Count: ' + i + " Time: " + moment().format('hh/mm/ss'));
}

eventEmitter.on('ping', ping);
eventEmitter.on('pong', pong);

for (var i = 0; i <= 15; i++){
    if (i % 2 == 0) {
        eventEmitter.emit('ping');
    }
    else if (i % 2 == 1) {
        eventEmitter.emit('pong');
    }
}

console.log('Game Over!');