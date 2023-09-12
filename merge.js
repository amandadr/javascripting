function merge(arrOne, arrTwo) {
  const newArr = [];
  for (const num of arrOne) {
    newArr.push(num);
  }
  for (const num of arrTwo) {
    newArr.push(num);
  }
  newArr.sort(function(a, b) {return a - b });
  return(newArr);
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);