//code.stephenmorley.org
function Queue(){
  var a=[],
  b=0;
    this.getLength=function(){
    return a.length-b
    };
    this.isEmpty=function(){
    return 0==a.length
    };
    this.enqueue=function(b)
    {
      a.push(b)
    };
    this.dequeue=function(){
    if(0!=a.length){
      var c=a[b];
        2*++b>=a.length&&(a=a.slice(b),b=0);
        return c
        }
    };
    this.peek=function()
    {
      return 0<a.length?a[b]:void 0
    }
};

/*
// Creates the queue
var Queue = function() {
    this.storage = {};
    this.lastIn = 0;
    this.firstOut = 0;
}

// Adds a value to the end of the chain
Queue.prototype.enqueue = function(value) {
    // Check to see if value is defined
    if (value) {
        this.storage[this.lastIn] = value;
        this.lastIn++;
    }
}

// Removes a value from the beginning of the chain
Queue.prototype.dequeue = function() {
    // Check to see if queue is empty
    if (this.lastIn - this.firstOut === 0) {
        return undefined;
    }

    var result = this.storage[this.firstOut];
    delete this.storage[this.firstOut];
    this.firstOut++;
    return result;
}

// Returns the length of the queue
Queue.prototype.size = function() {
    return this.lastIn - this.firstOut;
}*/
