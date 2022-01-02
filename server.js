// server.js
 
const WebSocket = require('ws')
const url = process.env.URL
const pr = process.env.PORT
const wss = new WebSocket.Server({host:url, port: pr })
console.log("open server on: "+ url+":"+pr);

var x=1;
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message} `) 
    ws.send('Hello! Message ' + x + ' From Server!!')
    ++x
  })
  
})