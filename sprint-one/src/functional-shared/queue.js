var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentQueue = {};
  _.extend(currentQueue, queueMethods);
  currentQueue.storage = {};
  currentQueue.front = 0;
  currentQueue.queueSize = 0;
  return currentQueue;
};

var queueMethods = {
  enqueue:function(value){
	this.storage[this.front + this.queueSize] = value;
	this.queueSize++;
  },
  dequeue:function(){
	if(this.queueSize > 0){
	  var dequeueElement = this.storage[this.front];
	  delete this.storage[this.front];
	  this.front++;
	  this.queueSize--;
	  return dequeueElement;
	}
  },
  size:function(){
    return this.queueSize;
  }
};



