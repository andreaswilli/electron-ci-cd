export function flatten(array) {
  return array.reduce((acc, val) => acc.concat(val), [])
}

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
