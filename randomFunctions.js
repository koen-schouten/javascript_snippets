/**
 * Generates a random integer between min and max.
 * @param {number} min The lowest value
 * @param {number} max The highest value
 * 
 * @return {number} a random number between min and max
 */
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Picks a random element from an array.
 * @param {array} the array
 * 
 * @return an element from the array
 */
function randomElement(array){
    return array[randomInt(0, array.length-1)];
}

/**
 * Shuffles an array
 * @param {array} array the array
 * 
 * @return {array} a shuffled array
 */
function shuffleArray(array){
    let newArray = [];
    let randomIndex;
    //while the array contains elements
    while(array.length > 0){
        //pick an random index from the array
        randomIndex = randomInt(0, array.length-1);
        //push an element with that index to a new array
        newArray.push(array[randomIndex]);
        //remove that element from the old array
        array.splice(randomIndex, 1);
    }
    return newArray;
}