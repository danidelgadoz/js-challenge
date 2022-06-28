const sortedSquaredArray = (array = []) => {
  const squaredArray = array.map((a) => Math.pow(a, 2));
  const mySortedSquaredArray = [...squaredArray].sort((a, b) => a - b);
  return mySortedSquaredArray;
};

// Test Case 1
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

// Test Case 2
console.log(sortedSquaredArray([-2, -1]));

// Test Case 3
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]));
