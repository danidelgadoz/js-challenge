const nonConstructibleChange = (array = []) => {
  console.log('input', array);
  console.log('');
  let availableSumsList = [];

  array.map((item, index, all) => {
    const nextItems = [...all].slice(index, all.length);

    const sum = nextItems.reduce((partialSum, a) => partialSum + a, 0);
    availableSumsList.push(sum);
  });

  console.log(availableSumsList);
  //   return array;
};

// // Test Case 1
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

// // Test Case 2
console.log(nonConstructibleChange([1, 1, 1, 1, 1]));

// // Test Case 3
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
