import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div className='transaction-card'>
      <div>
        <span className='transaction-name'>
          {transaction.symbol}
          {": "}
        </span>
        <span className='transaction-amount'>{transaction.amount}</span>
      </div>
    </div>
  );
};

export default Transaction;
