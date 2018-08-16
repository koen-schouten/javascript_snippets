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