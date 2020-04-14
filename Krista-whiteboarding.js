// Problem 2
// Compose a function called sound(). You should be able to add the following functionality to the objects listed:

// Intended functionality:
// INPUT: > faucet.sound()
// OUTPUT: "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const makesNoise = (soundString) => {
  const obj = {
    sound: () => {
      console.log(`"${soundString}"`);
    },
  };
  return obj;
};

const faucet = makesNoise("Drip drip drip.");
const oldCar = makesNoise("Grumble grumble");
const sleepyBear = makesNoise("Grrr...yawn");
faucet.sound();
oldCar.sound();
sleepyBear.sound();

// --------------------------------------------------------
//Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// const throw = () => {};
// variables: distance, speed

//> battleRobot1.throw();
//"The battle robot throws the spear 100 yards at 200 miles per hour!"

// Next, add the throw() function to multiple battle robots.

const canThrow = (mph) => {
  return (yards) => {
    const obj = {
      throw: () => {
        console.log(
          `"The battle robot throws the spear ${yards} yards at ${mph} miles per hour!"`
        );
      },
    };
    return obj;
  };
};

const canThrowFast = canThrow(100);
const canThrowSlow = canThrow(25);

const testRobot = canThrow(60)(193108);
testRobot.throw();

const battleRobot1 = canThrowFast(20);
const battleRobot2 = canThrowFast(50);

battleRobot1.throw();
battleRobot2.throw();
