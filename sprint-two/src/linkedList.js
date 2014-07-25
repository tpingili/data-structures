var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null){
      list.head = list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head !== null){
      var result = list.head.value;
      if(list.head.next !== null){
        list.head = list.head.next;
      }else{
        list.head = list.tail = null;
      }
      return result;
    }
  };

  list.contains = function(target){
    debugger;
    if(list.head!== null){
      var currentNode = list.head;
      while(currentNode!== null){
        if(currentNode.value === target){
          return true;
        }else {
          currentNode = currentNode.next;
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
