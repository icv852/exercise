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
  //selection sort
  for (let i = 0; i < input.length; i++) {
    let currentSmallest = {
      value: maxNum,
      index: i,
    };
    for (let j = i; j < input.length; j++) {
      if (input[j] < currentSmallest.value) {
        currentSmallest.value = input[j];
        currentSmallest.index = j;
      }
    }
    input[currentSmallest.index] = input[i];
    input[i] = currentSmallest.value;
  }
  console.log(input);
}

main();
