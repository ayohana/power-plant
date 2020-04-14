// require('../src/plant-service.js');
import { storeState, changeState, feed, hydrate, giveLight, blueFood, greenFood, yuckyFood } from "../src/plant-service.js"

describe("Plant", () => {

  test("should correctly create a plant object with their properties of soil, water and light", () => {
    const stateChangerForPlant = storeState({ soil: 0, water: 0, light: 0});
    let plant = stateChangerForPlant(plant => plant);
    expect(plant.soil).toEqual(0);
  });
  
});
