function counter() {
    let count = 1;
    function countIncrement() {
        return count++;
    };

    return countIncrement;
}

let firstCounter = new counter();
let secondCounter = new counter();

let firstValues = [];
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
console.log('firstValues array: ' + firstValues);

let secondValues = [];
secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());
console.log('secondValues array: ' + secondValues);