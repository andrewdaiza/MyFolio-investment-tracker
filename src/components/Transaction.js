import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div className='transaction-card'>
      <div>
        {transaction.symbol} {": "}
        <span className='transaction-amount'>{transaction.amount}</span>
      </div>
    </div>
  );
};

export default Transaction;
