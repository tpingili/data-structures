//Using an array
var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //get the index for this key
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  //get the value stored at i 
  var bucket = this._storage.get(i);
  //if nothing exists at this value(bucket is undefined), meaning no key has ever hashed to this index
  if(!bucket){
    //create a new array to store elements which hash to this index
    bucket = [];
    //assign this bucket to the index i
    this._storage.set(i, bucket);
  }

  //assuming that the key doesn't exist
  var keyExists = false;
  //if a bucket exists, iterate through the bucket to see if there is a value defined for the key
  for(var i = 0; i < bucket.length;){
    //pick the first key
    var key = bucket[i];
    //is this key the one we are searching for
    if(key === k){
      //if yes, change the value associated
      bucket[i+1] = v;
      //we found the key
      keyExists = true;
      break;
    }
    //jumping to the next key. the next key is found two places from its previous key
    i = i + 2;
  }

  //if we didn't find an existing key, we need to insert this key, value pair in the bucket
  if(!keyExists){
    bucket.push(k,v);
     //increment # of elements stored in the hash table
    this._count++;
    //if this is more than 75% of the total limit, make the hashtable double in size
    if(this._count > 0.75 * this._limit){
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  //get the index for this key
  var i = getIndexBelowMaxForKey(k, this._limit);
  //get the bucket stored at the index i
  var bucket = this._storage.get(i);
  //if nothing exists at the bucket, return null;
  if(!bucket){
    return null;
  }
  //if bucket exists, search for the key
  for(var i = 0; i < bucket.length;){
    //pick the first key
    var key = bucket[i];
    //is this the key that we are searching
    if(key === k){
      //if yes, return its associated value
      return bucket[i+1];
    }
    //jumping to the next key. the next key is found two places from its previous key
    i = i + 2;
  }
  //if the key is not found in the bucket, return null
  return null;
};

HashTable.prototype.remove = function(k){
  //get the index for this key
  var i = getIndexBelowMaxForKey(k, this._limit);

  //get the bucket stored at the index i
  var bucket = this._storage.get(i);

  //if there exists nothing at the bucket for this index, simply return
  if(!bucket){
    return;
  }

  //if the bucket exists, iterate through the bucket to find the value
  for(var i = 0; i < bucket.length; i++){
    //pick the first key
    var key = bucket[i];
    //is this the key we are searching for
    if(key === k){
      //remove the key and its value
      bucket.splice(i, 2);
      //decrement the # of elements in the hash table
      this._count--;
      //if the space usage falls below 25%, shrink the hashtable into half
      if(this._count < 0.25 * this._limit){
        this._resize(this._limit/2);
      }
      return;
    }
  }
  //if the key was not found in the bucket, return null
  return null;
};

HashTable.prototype._resize = function(limit){
  //store the current storage in a temp variable
  var oldStorage = this._storage;

  //make a new storage object & reinitialize count & limit
  this._storage = makeLimitedArray(limit);
  this._limit = limit;
  this._count = 0;
   //assign this to a variable in order to prevent loss of binding
  var context = this;
  //iterate through the oldStorage and insert them in the new storage
  oldStorage.each(function(bucket){
    //if there's no bucket, simply return
    if(bucket === undefined){
      return;
    }
    for(var i = 0; i < bucket.length;){
      //insert each key, value pair into the new hashtable
      context.insert(bucket[i], bucket[i+1]);
      i = i + 2;
    }
  });
};

