import $ from 'jquery';

// This function stores our state.
const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState({});

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// functions created using the function factory

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = feed(5);
const greenFood = feed(10);
const yuckyFood = feed(-5);

// plants that are manipulated using our factory-made functions
let plant = {};
plant = blueFood(plant);
// console.log(plant);
const fedPlant = stateChanger(blueFood);
console.log(fedPlant);

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});