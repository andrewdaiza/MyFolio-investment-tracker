import React, { useState, useEffect } from "react";
import CryptoTile from "./CryptoTile";
import BuyForm from "./BuyForm";

import CryptoTitlebar from "./CryptoTitlebar";
import Transactions from "./Transactions";
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";

import { getCryptoData } from "../api/CryptoData";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [searchState, setSearchState] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [limit, setLimit] = useState(10);

  // Run function to fetch API data and initialize default value
  const initialFetchData = async () => {
    try {
      const cryptoDataAPI = await getCryptoData(searchState, limit);
      setCryptoData(cryptoDataAPI.data);
      setSelectedCoin(cryptoDataAPI.data[0]);
    } catch (e) {
      console.error(e);
    }
  };
  // Run function to fetch API data
  const refreshFetchData = async () => {
    try {
      const cryptoDataAPI = await getCryptoData(searchState, limit);
      setCryptoData(cryptoDataAPI.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Run initial async function on page load
  useEffect(() => {
    initialFetchData();
  }, []);

  // Run async function on state change
  useEffect(() => {
    refreshFetchData();
  }, [limit, searchState]);

  // Set currency result amount limit
  const handleLimit = (limitParam) => {
    setLimit(limitParam);
    setSearchState("");
  };
  // Set selected currency
  const handleSelect = (data) => {
    setSelectedCoin(data);
  };

  // Set crypto search value
  const handleSearch = (search) => {
    setLimit(2);
    setSearchState(search);
  };

  // Add transaction to state array
  const handleTransaction = (data) => {
    setTransactions([...transactions, data]);
    console.log(transactions);
  };

  return (
    <>
      <div className='container-upper'>
        <SearchForm searchParam={handleSearch} />
        <NavBar addLimit={handleLimit} />
      </div>
      <div className='container-lower'>
        <div>
          <Transactions transactions={transactions} />
        </div>
        <div>
          <BuyForm
            selectedCoin={selectedCoin}
            addTransaction={handleTransaction}
          />
        </div>
        <div>
          <CryptoTitlebar />
          {cryptoData.map((coin) => (
            <CryptoTile
              key={coin.id}
              data={coin}
              selected={selectedCoin}
              onClick={handleSelect}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
