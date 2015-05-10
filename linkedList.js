/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */


//Pay attention to the tests for hints on what Method names it expects.

function linkedListGenerator() {
  var head = null;
  var tail = null;

  var linkedListObject = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
  return linkedListObject;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(newValue){
    var node = {
      value: newValue,
      next: null
    };
    if (head === null) {
      head = node;
    } else {
      tail.next = node;
    }
    tail = node;
    return node;
  }

  function remove(x){
    var node1 = get(x-1);
    var nodeX = get(x);
    var node2 = get(x+1);

    if (!get(x)){
      return false;
    } else if (nodeX === tail){
      node1.next = null;
      tail = node1;
    } else if (nodeX === head){
      head = node2;
      nodeX.next = null;
    } else {
      node1.next = node2;
    }

  }

  function get(x){
    var tracker = head;
    for (var i = 0; i < x; i++){
      if (tracker === tail){
        return false;
      }
      tracker = tracker.next;
    }
    if (tracker === null || x < 0){
      return false;
    }
    return tracker;
  }

  function insert(value, x){
    var nodeNew = {
      value: value,
      next: null
    };
    var node1 = get(x-1);
    var node2 = get(x);

    if (!node2){
      return false;
    } else if (node2 === head){
      nodeNew.next = node2;
      head = nodeNew;
    } else {
      nodeNew.next = node2;
      node1.next = nodeNew;
    }
    return false;
  }
}