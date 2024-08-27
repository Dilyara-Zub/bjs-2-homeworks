"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let root1;
  let root2;

  if (d > 0) {
    root1 = (-b + Math.sqrt(d) ) / (2 * a);
    root2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(root1, root2);
  } else if (d === 0) {
      root1 = -b / (2 * a);
      arr.push(root1);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);

  let numTotalPayment = Number(totalPayment); 
  return numTotalPayment;
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);