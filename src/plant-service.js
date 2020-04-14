// let plant = { soil: 0, light: 0, water: 0}
// console.log(plant = changePlantState(plant, "soil", -5));
// console.log(changePlantState(plant, "water", 8));

// implicit return
// value => value + 3;

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = feed(5);
const greenFood = feed(10);
const yuckyFood = feed(-5);

let plant = {};
plant = blueFood(plant);
console.log(plant);
