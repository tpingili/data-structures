var makeQueue = function() {
  var currentQueue = Object.create(queueMethods);
  currentQueue.storage = {};
  currentQueue.queueSize = 0;
  currentQueue.front = 0;
  return currentQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.queueSize+this.front] = value;
    this.queueSize++;
  },
  dequeue: function(){
    if(this.queueSize > 0){
      var dequeuedElement = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      this.queueSize--;
      return dequeuedElement;
    }
  },
  size: function(){
    return this.queueSize;
  }
};


