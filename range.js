const range = function (start, end, step) {
  let newArr = []
  for (let i = start; i <= end; i = i + step) {
    if( start > end ||  step <= 0 || undefined) {
      break;
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));