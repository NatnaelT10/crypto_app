import React, { useState, useEffect } from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import './Featured.css';

const Featured = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='featured'>
      <div className='container'>
        <div className='vänster'>
          <h2>Explore top Crypto's like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

        <div className='höger'>
          {data.map((crypto, index) => (
            <div className='card' key={index}>
              <div className='top'>
                <img src={crypto.image} alt='' />
              </div>
              <div>
                <h5>{crypto.name}</h5>
                <p>${crypto.current_price.toLocaleString()}</p>
              </div>
              {crypto.price_change_percentage_24h < 0 ? (
                <span className='red'>
                  <FiArrowDown className='icon' />
                  {crypto.price_change_percentage_24h.toFixed(2)}
                </span>
              ) : (
                <span className='green'>
                  <FiArrowUpRight className='icon' />
                  {crypto.price_change_percentage_24h.toFixed(2)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
