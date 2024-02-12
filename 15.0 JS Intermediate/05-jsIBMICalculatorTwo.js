console.log(bmiCalculator(100, 1.86));

function bmiCalculator(weight, height){
    var score = Math.round(weight / (height * height));

    switch (true) {
        case (score < 18.5):
            return "Your BMI is " + score + " , so you are underweight.";
        case (score < 24.9):
            return "Your BMI is " + score + " , so you are normal weight.";
        case (score < 30):
            return "Your BMI is " + score + " , so you are overweight.";
        case (score < 35):
            return "Your BMI is " + score + " , so you are obese.";
        default:
            return "Your BMI is " + score + " , so you are extremely obese.";
    }
}