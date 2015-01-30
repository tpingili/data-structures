var makeStack = function() {
  var currentStack = Object.create(stackMethods);
  currentStack.storage = {};
  currentStack.stackSize = 0;
  return currentStack;
};

var stackMethods = {
  push:function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  pop:function(){
    if(this.stackSize > 0){
      var poppedElement = this.storage[--this.stackSize];
      delete this.storage[this.stackSize];
      return poppedElement;
    }
  },
  size:function(){
   return this.stackSize;
  }
};


