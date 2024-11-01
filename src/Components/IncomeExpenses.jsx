import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = (transaction) => {
  const { transactions } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            {sign}${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            {sign}${expense}
          </p>
        </div>
      </div>
    </>
  );
};
