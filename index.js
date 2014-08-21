var Link = function(data){
  this.data = data;
  this.next = null;
};
Link.prototype.each = function(cb) {
  cb(this);

  if (this.next !== null) {
    this.next.each(cb);
  }
};

// `tail` recurses until it finds the tail and returns the result of a 
// invoking a passed in callback on the tail.
Link.prototype.tail = function(cb){
  
  if ( this.next !== null ) {
    return this.next.tail(cb);
  } else {
    return cb === undefined ? this: cb(this);
  }
};

module.exports = {
  Link: Link
};