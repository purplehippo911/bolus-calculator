
export function bolusCalculator(carbIntake:number, currentBS:number, Ik=10, kf= 2, targetBloodSugar=6) {
    
// sorting targetblood sugar in numerical order
//const sortedTargets = [...targetBloodSugar].sort((b, a) => a + b);

// calculating carbohydrate bolus
const carbBolus = carbIntake / Ik; // making ik just deafult number

// calculating correction bolus
//const difference = sortedTargets[0] - sortedTargets[1];

const correctionBolus = (currentBS - targetBloodSugar) / kf;

const totalBolus = carbBolus + correctionBolus;

return totalBolus;
}
