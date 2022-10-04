//first: list ingredients

let spaghetti = 400;
let guanciale = 250;
let freshYolks = 6;
let agedCheese = 50;
let blackPepper = 4;
let water = 3000;
let salt = 0.5;

//second: instructions

let firstBowl = freshYolks + agedCheese;
let smallAmountPep = blackPepper - 3;
let newBlackPepper = 3;
firstBowl += smallAmountPep;
let guancialeFat = guanciale - 200;
let saltyWater = water + salt;
let droppedPasta = saltyWater + spaghetti;
let absorbedRate = 1.5;
let absorbedSalt = 0.2;
let cookedPasta = spaghetti * absorbedRate + absorbedSalt;
let absorbedWater = cookedPasta - spaghetti;
let reservedWater = 1;
let remainingWater = water - absorbedWater - reservedWater;
let remainingSalt = salt - absorbedSalt;
let drainedPasta = cookedPasta - remainingWater - remainingSalt;
let carbSauce = reservedWater + guancialeFat;
let completedCarb =
  carbSauce + cookedPasta + firstBowl + newBlackPepper + guanciale;
console.log(completedCarb);
