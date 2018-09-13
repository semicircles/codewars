/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
 * Write a method that takes the array as an argument and returns this "outlier" N.
 */
 
function findOutlier(integers) {
  const evenCount = integers.filter(num => num % 2 === 0);
  const oddCount = integers.filter(num => num % 2 !== 0);
  
  return evenCount.length === 1 ? evenCount[0] : oddCount[0];
}
