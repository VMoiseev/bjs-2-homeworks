"use strict";

function solveEquation(a, b, c) {

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [(- b + Math.sqrt(discriminant)) / 2 * a];
  } else if (discriminant > 0) {
    return [(- b + Math.sqrt(discriminant)) / 2 * a, (- b - Math.sqrt(discriminant)) / 2 * a];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  const calculateTotalMortgageName = ["percent", "contribution", "amount"];

  if (isNaN(percent) === true || percent === "" || percent === " ") {
    return (`Параметр "${calculateTotalMortgageName[0]}" содержит неправильное значение`);
  } else if (isNaN(contribution) === true || contribution === "" || contribution === " ") {
    return (`Параметр "${calculateTotalMortgageName[1]}" содержит неправильное значение`);
  } else if (isNaN(amount) === true || amount === "" || amount === " "){
    return (`Параметр "${calculateTotalMortgageName[2]}" содержит неправильное значение`);
  } else {
    const loanBody = +amount - Number(contribution);
    const creditPeriod = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
    const monthPercent = Number(percent) / 12 / 100;
    const paymentPerMonth = loanBody * (monthPercent + monthPercent / (((1 + monthPercent) ** creditPeriod) - 1));
    const totalAmount = Number((paymentPerMonth * creditPeriod).toFixed(2));

    return totalAmount;
  }
}