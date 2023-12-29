function calcWordFrequencies(input) {
    let wordArray = input.split(" ");
    let map = new Map();
    for (let index = 0; index < wordArray.length; index++) {
        const element = wordArray[index];
        if(map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    return map;
}

console.log(calcWordFrequencies("hey hi Mark hi mark"));