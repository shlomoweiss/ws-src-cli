// client.js
 
const WebSocket = require('ws')
var reconnectInterval = 1 * 1000 * 60;
var ws;
var x=1
const url = process.env.URL
const pr = process.env.PORT
var conncetStr = "ws://"+url+":"+pr
console.log("connect to: "+ conncetStr);
var connect = function(){
    ws = new WebSocket(conncetStr);
    ws.on('open', function() {
        console.log('socket open');
        setTimeout(()=> {
           ws.send('Message From Client '+ x);
           ++x},1000);
        
    });
    ws.on('error', function() {
        console.log('socket error');
    });
    ws.on('close', function() {
        console.log('socket close');
        setTimeout(connect, reconnectInterval);
    });
    
    ws.onmessage = (e) => {
       console.log(e.data)
       setTimeout(()=> {
           ws.send('Message From Client '+ x);
           ++x},1000)
    }
};
connect();