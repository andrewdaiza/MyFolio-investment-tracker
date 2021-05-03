import React from "react";

const CryptoTile = ({ data, selected, onClick }) => {
  const {
    rank,
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
  } = data;
  const handleClick = () => {
    onClick(data);
  };
  return (
    <div
      className={`card ${data.id === selected.id && "selected"} `}
      onClick={handleClick}
    >
      <div className='card-body'>
        <div className='crypto-rank'>{rank}</div>
        <img
          className='crypto-logo'
          src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt='Currency Logo'
        />
        <div className='crypto-title'>
          {name} <div className='crypto-symbol'> {symbol} </div>
        </div>
        <div className='crypto-cost'>${parseFloat(priceUsd).toFixed(2)}</div>
        <div
          className={`crypto-vol ${changePercent24Hr > 0 ? "green" : "red"}`}
        >
          {parseFloat(changePercent24Hr).toFixed(2)}%
        </div>

        {/* <div className='crypto-cap'>
          ${parseFloat(marketCapUsd).toLocaleString()}
        </div> */}
      </div>
    </div>
  );
};

export default CryptoTile;
