var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //we're going to store v in ._storage at index i
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  //index of the value for the key k
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert(k,v) = O(1)
 * .retrieve(k) = O(1)
 * .remove(k) = O(1)
 */
