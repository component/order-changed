
module.exports = function(a, b){
  a = a.slice();
  b = b.slice();

  // remove any missing
  if (a.length != b.length) {
    for (var i = 0; i < a.length; i++) {
      if (~b.indexOf(a[i])) continue;
      a.splice(i, 1);
    }
  }

  // compare
  for (var i = 0; i < a.length && i < b.length; i++) {
    if (a[i] !== b[i]) {
      return true;
    }
  }

  return false;
};
