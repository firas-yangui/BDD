var express = require('express');
var app = express();

var RoundLinkedQueue = require('./round-linked-queue')();
console.log('RoundLinkedQueue ', RoundLinkedQueue);

app.get('/RoundLinkedQueue/push/:data', function(req, res) {
  console.log('data ', req.params.data);
  RoundLinkedQueue.push(req.params.data);
  res.send(req.params.data);
});

app.get('/RoundLinkedQueue/pop', function(req, res) {
  res.send(RoundLinkedQueue.pop());
});

app.get('/RoundLinkedQueue/first', function(req, res) {
  res.send(RoundLinkedQueue.first());
});

app.get('/RoundLinkedQueue/last', function(req, res) {
  res.send(RoundLinkedQueue.last());
});

app.listen(3000);
