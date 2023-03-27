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
  for (let i = input.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  console.log(input);
}

main();
