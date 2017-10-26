'use strict';


function linkedQueue(maxSize) {
  var RoundLinkedQueue = require('./round-queue');
  var queue = new RoundLinkedQueue(maxSize || 5);

  function push(data) {
    return queue.push(data);
  }
  function pop() {
    return queue.pop();
  }
  function first() {
    return queue.first();
  }
  function last() {
    return queue.last();
  }

  return {
    push: push,
    pop: pop,
    first: first,
    last: last
  };
}

module.exports = linkedQueue;
