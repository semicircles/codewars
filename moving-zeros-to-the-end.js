/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */
 
const moveZeros = (arr) => {
  return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0));
};
