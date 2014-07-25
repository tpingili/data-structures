var makeBinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

makeBinarySearchTree.prototype.insert = function(value){
  //if less than root nodes value
  if(value < this.value){
    //if this.left exists
    if(this.left){
      // this.left.insert(value)
      this.left.insert(value);
    }else{
      //if this.left does not exist, add value to this.left
      this.left = new makeBinarySearchTree(value);
    }
  }else{//if more than root nodes value
      // if this.right exists
      if(this.right){
        // this.right.insert(value)
        this.right.insert(value);
      }else{
        // if this.right doesn't exist, add value to this.right
        this.right = new makeBinarySearchTree(value);
      }
    }
};

makeBinarySearchTree.prototype.contains = function(target){
  //if the node we're in has the value we're looking for
  if(this.value === target){
    return true;
  }else if(target < this.value){
    //if left child exists
    if (this.left){
      //invoke contains on left child of current node
      return this.left.contains(target);
    }
  }else{
    //if right child exists
    if(this.right){
      //invoke contains on the right child of current node
      return this.right.contains(target);
    }
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(func){
  func.apply(this, [this.value])

  //if left child exists then this.left.depthFirstLog(func)
  if(this.left){
    this.left.depthFirstLog(func);
  }
  //if right child exists then this.right.depthFirstLog(func)
  if(this.right){
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert(value) = O(log n)
 * .contains(target) = O(log n)
 * .depthFirstLog(func) = O(n)
 */
