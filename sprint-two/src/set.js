var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(typeof item === 'string'){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  if(typeof item === 'string'){
    if(this._storage[item]!== undefined){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  if(typeof item === 'string'){
    if(this._storage[item]!== undefined){
      delete this._storage[item];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .add(item) = O(1)
 * .contains(item) = O(1)
 * .remove(item) = O(1)
 */
