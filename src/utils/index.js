
/**
 * Random integer in range (0, max)
 * 
 * @param max upper limit of the range of numbers that are returned
 * 
 * @returns a random integer from 0 to max
 */
function getRandomInteger  (max) {
    return Math.floor(Math.random() * max+1);
}

/**
 * 
 * @param {string} str string to capitalize
 * 
 * @returns `str` with an upper first letter
 */
function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
    getRandomInteger,
    capitalize
};