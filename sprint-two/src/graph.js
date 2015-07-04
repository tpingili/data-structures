var Graph = function(){
  this._storage = {};
};

Graph.prototype._GraphNode = function(value){
  this.value = value;
  this.edges = {};
}

Graph.prototype.addNode = function(newNode, toNode){
  //create a GraphNode with newNode as value
  var node = new this._GraphNode(newNode);
  //if toNode doesn't exist, we
  if(toNode === undefined){
    //Add newNode to __storage ONLY if _storage is empty
    var keys = Object.keys(this._storage);
    if( keys.length === 0){
      this._storage[newNode] = node;
    }if(keys.length === 1){
      this.addNode(newNode, keys[0]);
    }
  }else{
    if(this.contains(toNode)){
      //add newNode to toNode's edges
      this._storage[toNode].edges[newNode] = newNode;
      //add toNode to newNode's edges
      node.edges[toNode] = toNode;
      //add newNode to _storage
      this._storage[newNode] = node;
    }
  }
};

Graph.prototype.contains = function(node){
  return (this._storage[node] === undefined? false : true);
};

Graph.prototype.removeNode = function(node){
  var checkNode = this.contains(node);
  if(checkNode){
    var connectedNodes = this._storage[node].edges;
    for(var key in connectedNodes){
      delete this._storage[key].edges[node];
    }
    delete this._storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this._storage[fromNode].edges[toNode]!== undefined ? true: false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var n1 = fromNode;
  var n2 = toNode;
  if(n1 && n2){
    this._storage[n1].edges[n2] = n2;
    this._storage[n2].edges[n1] = n1;
  }
};

Graph.prototype.isNodeIsolated = function (node){
  var edges = Object.keys(this._storage[node].edges);
  return edges.length === 0 ? true : false;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var n1 = fromNode;
  var n2 = toNode;
  if(n1 && n2){
    delete this._storage[n1].edges[n2];
    if(this.isNodeIsolated(n1)){
      delete this._storage[n1];
    }
    delete this._storage[n2].edges[n1];
    if(this.isNodeIsolated(n2)){
      delete this._storage[n2];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
