function concat(arrOne, arrTwo) {
  let combined = [];
  for (const elementOne of arrOne) {
    combined.push(elementOne);
  }
  for (const elementTwo of arrTwo) {
    combined.push(elementTwo);
  }
  return combined;
}


console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);