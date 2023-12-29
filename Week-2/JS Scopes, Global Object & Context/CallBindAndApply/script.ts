class Calculator {
    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
}

class ScientificCalculator extends Calculator {
    square(firstNumber) {
        return Math.pow(firstNumber, 2);
    }

    cube(firstNumber) {
        return Math.pow(firstNumber, 3);
    }

    power(firstNumber, powerNumber) {
        return Math.pow(firstNumber, powerNumber);
    }
}

let calc = new Calculator();
//calls the method with different object and passing input parameters as per signature of the method
let callResult = calc.add.call(calc, 10, 5);
console.log(callResult);
//calls the method with different objects and acccepts parameters in array set which can be passed dynamically
let applyResult = calc.subtract.apply(calc, [10, 5]);
console.log(applyResult);

let scientificCal = new ScientificCalculator();
//wraps up the method call and object and gets stored in called method for later calls.
function multiplyByTwo(num) {
    return num * 2;
}
scientificCal.power.bind(multiplyByTwo);

const boundedToMultiplyByTwo = multiplyByTwo.bind(scientificCal);

function powerOfThree(num) {
    return Math.pow(num, 3);
}
const boundToPowerOfThree = powerOfThree.bind(scientificCal);

console.log(boundedToMultiplyByTwo(5));
console.log(boundToPowerOfThree(2));

