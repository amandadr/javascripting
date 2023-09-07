function smartGarbage(trash, bins) {
  bins.waste = 0;
  bins.recycling = 0;
  bins.compost = 0;
  
  bins[trash] =+ 1;
}


console.log(smartGarbage("waste", { waste: 4, recycling: 2, compost: 5 }));