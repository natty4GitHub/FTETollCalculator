function LinkedHashMap(maxLength) {
  this.map = {};
  this.head = null;
  this.tail = null;
  this.length = 0;
  this.maxLength = maxLength;
}

LinkedHashMap.prototype = {
  get: function(key) {
    var item = this.map[key] || {};
    return item.payload;
  },

  addHead: function(key, payload) {
    this.remove(key);
    if (this.length === this.maxLength) {
      this.removeTail();
    }
    var item = {
      key: key,
      prev: null,
      next: this.head,
      payload: payload
    };
    if (this.head) {
      this.head.prev = item;
    }
    this.head = item;
    if (!this.tail) {
      this.tail = item;
    }
    this.map[key] = item;
    this.length += 1;
  },

  removeTail: function() {
    if (this.tail) {
      this.removeItem(this.tail);
    }
  },

  // remove item by key
  remove: function(key) {
    var item = this.map[key];
    if (!item) return;
    this.removeItem(item);
  },

  // this removes an item from the link chain and updates length/map
  removeItem: function(item) {
    if (this.head === item) {
      this.head = item.next;
    }
    if (this.tail === item) {
      this.tail = item.prev;
    }
    if (item.prev) {
      item.prev.next = item.next;
    }
    if (item.next) {
      item.next.prev = item.prev;
    }
    delete this.map[item.key];
    this.length -= 1;
  }
};
