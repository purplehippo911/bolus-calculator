
export function bolusCalculator(carbIntake:number, currentBS:number) {
    
// setting up basic values
const targetBloodSugar = 6;
const kf = 2;

// sorting targetblood sugar in numerical order
//const sortedTargets = [...targetBloodSugar].sort((b, a) => a + b);

// calculating carbohydrate bolus
const carbBolus = carbIntake / 10; // making ik just deafult number

// calculating correction bolus
//const difference = sortedTargets[0] - sortedTargets[1];

const correctionBolus = (currentBS - targetBloodSugar) / kf;

const totalBolus = carbBolus + correctionBolus;


console.log("Target blood sugar", targetBloodSugar);
console.log("Sorted Targets.", sortedTargets);
console.log("Difference", difference);
console.log("Carb Bolus", carbBolus);
console.log('Correction bolus', correctionBolus);
console.log ('Total:', totalBolus);

return totalBolus;
}