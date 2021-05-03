import React from "react";

const InputBase = ({ selectedCoin, ...props }) => (
  <>
    <input type='number' className='' {...props} />
    <span className='buy-currency-type'>
      {selectedCoin ? selectedCoin.symbol : "USD"}
    </span>
  </>
);

export default InputBase;
