console.log(bmiCalculator(114, 1.70));

function bmiCalculator(weight, height){
    return Math.round(weight / (height * height));
}