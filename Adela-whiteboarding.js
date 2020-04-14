// Problem #1:
// Requirements:
// -Add function paint() to 3 painters
// -Each painter can only paint with 1 color

// Input: painter1.paints()
// Output: "Paints green!"

const paint = function (color) {
  const obj = {
    paints: function () {
      return `Paints ${color}!`;
    }
  }
  return obj;
}

const painter1 = paint("green");
const painter2 = paint("yellow");
const painter3 = paint("red");
console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());

// Problem #4
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:
// Input: > dancer.samba()
// Output: "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"
// Then add the dance moves to a dancer.

const danceMove = () => {
  const obj = {
    samba: () => {
      console.log(`"The dancer sambas!"`);
    },
    tango: () => {
      console.log(`"The dancer tangos!"`);
    },
    salsa: () => {
      console.log(`"The dancer salsas!"`);
    }
  }
  return obj;
}

const dancer = danceMove();
dancer.samba();
dancer.tango();
dancer.salsa();

// LEARNING COMPOSITION MORE IN DEPTH ---------------

const danceType = (danceType) => ({
  [danceType]: () => {
    console.log(`"The dancer ${danceType}s!"`);
  }
})

const makeDancer = (type) => {
  return (name) => ({
    name,
    [type]: () => {
      console.log(`"${name} ${type}s!"`);
    }
  })
};

const breakdancer = makeDancer("breakdance");
const swingDancer = makeDancer("swing dance");

const breakdancerJoe = makeDancer("breakdance")("Joe");

breakdancerJoe.breakdance();

const learnDance = (type) => {
  return (dancer) => {
    return { ...dancer, ...makeDancer(type)(dancer.name) };
  }
}

const learnSalsa = learnDance("salsa")
const breakdancerSalsaDancerJoe = learnSalsa(breakdancerJoe);
console.log(breakdancerJoe);
breakdancerSalsaDancerJoe.salsa();

const createDancer = (name) => {
  return (danceType) => ({
    name,
    [danceType]: () => {
      console.log(`${name} ${danceType}s!`);
    }
  })
}

const molly = createDancer("Molly")("salsa");
molly.salsa();

const dancer1 = danceType("hip hop");
const dancer2 = danceType("breakdance");
// dancer1.hiphop();
dancer2.breakdance();
dancer1["hip hop"]();

const katie = makeDancer("Katie");
// katie.breakdance();
console.log(katie);


const dancer3 = { ...dancer1, ...dancer2, ...danceType("swing"), ...danceType("flamenco") };
console.log(dancer3);
dancer3.breakdance();