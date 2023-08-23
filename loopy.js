for (let num = 100; num < 201; num++) {
  if (num % 3 < 1 && num % 4 < 1) {
    console.log("LoopyLighthouse");
  } else { 
      if (num % 3 < 1) {
        console.log("Loopy");
      } else {
          if (num % 4 < 1) {
            console.log("Lighthouse");
          } else {
            console.log(num);
          }
      }
  }
}