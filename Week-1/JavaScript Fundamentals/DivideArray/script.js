function divideArray(arr) {
    let evenNums = [], oddNums = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(arr[index] % 2 === 0) {
            evenNums.push(arr[index])
        } else {
            oddNums.push(arr[index]);
        }
    }

    console.log('Even numbers: ');
    console.log(evenNums.length > 0 ? evenNums.sort(): "None");
    console.log('Odd numbers: ');
    console.log(oddNums.length > 0 ? oddNums.sort(): "None");
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums);

nums = [4, 2, 8]; divideArray(nums);
