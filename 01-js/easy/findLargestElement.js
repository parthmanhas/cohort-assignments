/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if(numbers.length === 0) return undefined;

    let maxElement = -100000;

    numbers.forEach(num => {
        maxElement = Math.max(maxElement, num);
    });

    return maxElement;

}

module.exports = findLargestElement;