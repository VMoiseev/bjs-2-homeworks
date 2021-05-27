"use strict";

function solveEquation(a, b, c) {

  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return [];
  } else if (D === 0) {
    return [(- b + Math.sqrt(D)) / 2 * a];
  } else if (D > 0) {
    return [(- b + Math.sqrt(D)) / 2 * a, (- b - Math.sqrt(D)) / 2 * a];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let loanBody = +amount - Number(contribution);
  let creditPeriod = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
  let monthPercent = Number(percent) / 12 / 100;
  let paymentPerMonth = loanBody * (monthPercent + monthPercent / (((1 + monthPercent) ** creditPeriod) - 1));
  let totalAmount = Number((paymentPerMonth * creditPeriod).toFixed(2));
  return totalAmount;
}
