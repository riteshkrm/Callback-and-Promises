function doubleElements(arr, callback) {
  const doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(callback(arr[i]));
  }
  return doubledArr;
}

function double(num) {
  return num * 2;
}

const inputArr = [1, 2, 3, 4, 5];
const doubledArr = doubleElements(inputArr, double);
console.log(doubledArr);
