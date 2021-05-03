import React, { useState, useEffect } from "react";
import InputBase from "./InputBase";

const BuyForm = ({ selectedCoin, addTransaction }) => {
  const {
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
  } = selectedCoin;

  const [amountCrypto, setAmountCrypto] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);

  // Calculate exchange value from user USD input and selected crypto value
  const handleExchange = () => {
    let convert = Number(amountCrypto / priceUsd).toFixed(4);

    setTransactionAmount(convert);
  };

  // On inputted price or currency change run exchange function
  useEffect(() => {
    handleExchange();
  }, [amountCrypto, priceUsd]);

  // On submit add transaction
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amountCrypto === "" || amountCrypto <= 0) {
      alert("Invalid Data, please enter a number");
    } else {
      addTransaction({
        amount: Number(transactionAmount),
        name: name,
        symbol: symbol,
      });
      setAmountCrypto("");
    }
  };

  return (
    <>
      <form className='buy-form' onSubmit={handleSubmit}>
        <div className='buy-container'>
          <div className='buy-usd'>
            <InputBase
              onChange={(e) => setAmountCrypto(e.target.value)}
              value={amountCrypto}
            />
          </div>
          <div>
            <i className='fas fa-exchange-alt' />
          </div>
          <div className='buy-currency'>
            <InputBase
              disabled
              selectedCoin={selectedCoin}
              value={transactionAmount}
            />
          </div>
        </div>
        <div className='button-div'>
          <input className='button' type='submit' value='Purchase' />
        </div>
      </form>
    </>
  );
};

export default BuyForm;
