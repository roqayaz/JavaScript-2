
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// return 12 because in the block a has been declared again as 12 and a is a global variable 