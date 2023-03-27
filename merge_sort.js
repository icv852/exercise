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
  console.log(mergeSort(input));
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const cutoff = Math.floor(array.length / 2);
  const array1 = mergeSort(array.slice(0, cutoff));
  const array2 = mergeSort(array.slice((array.length - cutoff) * -1));

  let tempArr = [];
  let index1 = 0;
  let index2 = 0;
  for (i = 0; i < array1.length + array2.length; i++) {
    if (array1[index1] <= array2[index2]) {
      tempArr.push(array1[index1]);
      index1++;
      if (index1 >= array1.length) {
        tempArr.push(...array2.slice((array2.length - index2) * -1));
        break;
      }
    } else {
      tempArr.push(array2[index2]);
      index2++;
      if (index2 >= array2.length) {
        tempArr.push(...array1.slice((array1.length - index1) * -1));
        break;
      }
    }
  }
  return tempArr;
}

main();
