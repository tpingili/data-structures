var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentStack = {};
  _.extend(currentStack, stackMethods);
  currentStack.storage = {};
  currentStack.stackIndex = 0;
  return currentStack;
};

var stackMethods = {
  push: function(value){
	this.storage[this.stackIndex] = value;
	this.stackIndex++;
	},
  pop: function(){
	if(this.stackIndex > 0){
	  this.stackIndex--;
      var result = this.storage[this.stackIndex];
	  delete this.storage[this.stackIndex];
	  return result;
	}
  },
  size: function(){
	return this.stackIndex;
  }
};

