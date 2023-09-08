const judgeVegetable = function (vegetables, metric) {
  let best = 0;
  let nameOfWinner = '';
  vegetables.forEach(function(vegetable) {
    if (vegetable[metric]>= best) {
    best = vegetable[metric];
    nameOfWinner = vegetable.submitter;
    } 
  }) 
return nameOfWinner;
}
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));