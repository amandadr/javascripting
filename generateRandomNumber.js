const generateRandomNumber = function () {
  let randomSeed = Math.random();
  let number = randomSeed * 1000;
  let roundedNumber = Math.random(number);

  return roundedNumber;
};

generateRandomNumber();