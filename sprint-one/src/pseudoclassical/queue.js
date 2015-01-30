var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.queueSize+this.front] = value;
  this.queueSize++;
};
Queue.prototype.dequeue = function(){
  if(this.queueSize > 0){
    var dequeuedElement = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.queueSize--;
    return dequeuedElement;
  }

}
Queue.prototype.size = function(){
  return this.queueSize;
}


