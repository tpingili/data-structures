var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
};
Stack.prototype.push = function(value){
  this.storage[this.stackSize++] = value;
};
Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    var poppedElement = this.storage[--this.stackSize];
    delete this.storage[this.stackSize];
    return poppedElement;
  }
};
Stack.prototype.size = function(){
  return this.stackSize;
};

