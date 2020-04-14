// require('../src/plant-service.js');
import { storeState, changeState, feed, hydrate, giveLight, blueFood, greenFood, yuckyFood, water } from "../src/plant-service.js"

describe("Plant", () => {

  const stateChangerForPlant = storeState({ soil: 0, water: 0, light: 0});
  const stateChangerForPlantTwo = storeState({ soil: 10, water: 5, light: 10 });

  test("should correctly create a plant object with their properties of soil, water and light", () => {
    const babyPlant = stateChangerForPlant(plant => plant);
    expect(babyPlant.soil).toEqual(0);
    expect(babyPlant.water).toEqual(0);
    expect(babyPlant.light).toEqual(0);
  });

  test("feeding a plant blueFood should correctly increase soil level by 5", () => {
    const plantFed = stateChangerForPlant(blueFood);
    expect(plantFed.soil).toEqual(5);
  });

  test("hydrating a plant with water should correctly increase water level by 5", () => {
    const plantWatered = stateChangerForPlant(water);
    expect(plantWatered.water).toEqual(5);
  });

  test("giving light to a plant should correctly increase light level by 5", () => {
    const plantInLight = stateChangerForPlant(giveLight(5));
    expect(plantInLight.light).toEqual(5);
  });

  test("program should keep track of all accumulated status points of one particular plant", () => {
    const plantFedAgain = stateChangerForPlant(blueFood);
    expect(plantFedAgain.soil).toEqual(10);
  })

  test("program should create a second plant object", () => {
    const babyPlantTwo = stateChangerForPlantTwo(plant => plant);
    expect(babyPlantTwo.soil).toEqual(10);
    expect(babyPlantTwo.water).toEqual(5);
    expect(babyPlantTwo.light).toEqual(10);
  })
  
});