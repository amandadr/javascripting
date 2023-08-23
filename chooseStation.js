const stations = [
    ['Big Bear Donair', 19, 'community centre'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
function chooseStations(stations) {
  let goodStations = [];
  //name, capacity, venue type 
  for (const station of stations) {
      if (station[1] > 19 && (station[2] === 'school' || station[2] === 'community centre')) {
        goodStations.push(station[0]);
      };
    };
    return goodStations;
  };
console.log(chooseStations(stations));
chooseStations(stations);