import React from "react";
import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <div className='transactions-container'>
      <div className='transactions-title'>Transactions:</div>
      {transactions.length ? (
        transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))
      ) : (
        <div className='transactions-null'>
          No transactions, to add a transaction, please make a purchase.
        </div>
      )}
    </div>
  );
};

export default Transactions;
