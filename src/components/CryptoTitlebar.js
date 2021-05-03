import React from "react";

const CryptoTitlebar = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='crypto-rank'>Rank</div>

        <div className='titlebar-item titlebar-name'>Name</div>
        <div className='crypto-cost'>Price</div>
        <div className='crypto-vol'>Change</div>
      </div>
    </div>
  );
};

export default CryptoTitlebar;
