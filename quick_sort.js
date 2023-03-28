const arrayLength = 20;
const maxNum = 100;
const input = createRandomArray();

// create a random array of length N
function createRandomArray() {
  const input = [];
  for (let i = 0; i < arrayLength; i++) {
    input.push(Math.floor(Math.random() * maxNum));
  }
  return input;
}

function main() {
  console.log(quickSort(input));
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let tempArr = [];
  let tempArrLeft = [];
  let tempArrRight = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      tempArrRight.push(arr[i]);
    } else {
      tempArrLeft.push(arr[i]);
    }
  }

  tempArr.push(...quickSort(tempArrLeft), pivot, ...quickSort(tempArrRight));

  return tempArr;
}

main();
