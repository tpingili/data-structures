var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //Create node that will store value
    var newNode = makeNode(value);
    if(!list.head){
      list.head = list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head){
      var result = list.head.value;
      if(list.head.next){
        list.head = list.head.next;
      }else{
        list.head = list.tail = null;
      }
      return result;
    }
  };

  list.contains = function(target){
    if(list.head){
      var currentNode = list.head;
      for(; currentNode; currentNode = currentNode.next){
        if(currentNode.value === target){
          return true;
        }
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
