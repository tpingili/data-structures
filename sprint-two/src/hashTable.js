var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //get the index for this key
  var i = getIndexBelowMaxForKey(k, this._limit);

  var firstNode = this._storage.get(i);

  var createNode = function(key, value){
    return {'key':key, 'value':value, 'next':null};
  };

  var insertAt = function(currentNode, key, value){
    if(currentNode.next === null){
      currentNode.next = createNode(key, value);
    }else{
      insertAt(currentNode.next, key, value);
    }
  };

  if(!firstNode){
    this._storage.set(i,createNode(k,v));
  }else{
    insertAt(firstNode, k, v);
  }
};

HashTable.prototype.retrieve = function(k){
  //get the index for this key
  var i = getIndexBelowMaxForKey(k, this._limit);

  var findAt = function(currentNode, key){
    if(currentNode){
      if(currentNode.key === k){
        return currentNode.value;
      }else if(currentNode.next){
        return findAt(currentNode.next, k);
      }
    }else{
      return null;
    }
  };

  var firstNode = this._storage.get(i);
  var foundValue = findAt(firstNode, k);

  return foundValue;
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
