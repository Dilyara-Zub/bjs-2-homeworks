function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let arithmeticMean = sum / arr.length;
  let avg = Number(arithmeticMean.toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10);
getArrayParams(1, 2, 3, -100, 10);
getArrayParams(5);



function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (arr.length > 0) {
    return sum;
  } return 0;
  
}

function differenceMaxMinWorker(...arr) {
  let minValue = arr[0];
  let maxValue = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    } else if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  let valueDifference = maxValue - minValue;

  if (arr.length > 0) {
    return valueDifference;
  } return 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  let elementDifference = sumEvenElement - sumOddElement;

  if (arr.length > 0) {
    return elementDifference;
  } return 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  let division = sumEvenElement / countEvenElement;

  if (arr.length > 0) {
    return division;
  } return 0; 
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));


console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));


function makeWork (arrOfArr, func) {
  
 let maxWorkerResult = -Infinity;

for(let i = 0; i < arrOfArr.length; i++) {

  let functionResult = func(...arrOfArr[i]);

  if (functionResult > maxWorkerResult) {
    maxWorkerResult = functionResult;
  }

}

let max = Math.max(maxWorkerResult);

return max;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));