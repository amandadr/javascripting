function loopyLighthouse(range, multiples, words) {
  //put each multiples value into a variable
  const num1 = multiples[0];
  const num2 = multiples[1];

  for (let num = range[0]; num <= range[1]; num++) {
    //Turn (num % multiples[] === 0) into a function
    function divisible(input) {
      return (num % input === 0);
    }
    if (divisible(num1) && divisible(num2)) {
      console.log(words[0] + words[1]);
    } else if (divisible(num1)) {
      console.log(words[0]);
    } else if (divisible(num2)) {
      console.log(words[1]);
    } else {
      console.log(num);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]); //Deleted outer ()