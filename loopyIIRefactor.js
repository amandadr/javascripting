function loopyLighthouse(range, multiples, words) {
  //put each multiples value into a variable
  const num1 = multiples[0];
  const num2 = multiples[1];

  //Turn (num % multiples[] === 0) into a function
  const divisible = function(num, input) {
    return (num % input === 0);
  }

  for (let num = range[0]; num <= range[1]; num++) {
    if (divisible(num, num1) && divisible(num, num2)) {
      console.log(words[0] + words[1]);
    } else if (divisible(num, num1)) {
      console.log(words[0]);
    } else if (divisible(num, num2)) {
      console.log(words[1]);
    } else {
      console.log(num);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]); //Deleted outer ()