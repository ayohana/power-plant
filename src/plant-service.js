import $ from 'jquery';

// This function stores our state.
export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateChanger = storeState({ soil: 0, water: 0, light: 0});

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// functions created using the function factory

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

export const blueFood = feed(5);
export const greenFood = feed(10);
export const yuckyFood = feed(-5);

// plants that are manipulated using our factory-made functions

// let plant = {};
// plant = blueFood(plant);
// // console.log(plant);
const fedPlant = stateChanger(blueFood);
// console.log(fedPlant);

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});