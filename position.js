
function position(myList, target) {
  let token = true;
  let i = 0;
  let ret = 0;

  while (token === true) {
    if (myList[i] < target) {
      i += 1;
    }
    else {
      ret = i;
      token = false;
    }
  }
  return ret;
}

function easyPosition(myList, target) {
  return _.indexOf(myList, target, true);
}

console.log(easyPosition([1, 3, 5, 6], 5));
console.log(position([1, 3, 5, 6], 5));
