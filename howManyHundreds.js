//12:57pm Aug 23
function howManyHundreds(num) {
  let remainder = num % 100;
  let answer = (num - remainder) / 100;
  return answer;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);