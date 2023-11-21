import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
      async function fetchExchangeRates() {
        const assets = ['BTC', 'ETH', 'XRP'];
       
        const promises = await assets.map(asset =>
          axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=4631C5E0-AF29-4551-BB7A-F7F86C6FE18D`)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log("err", err);
          })
        );
        const responses = await Promise.all(promises);
        console.log(responses)
        const exchangeRates = responses.reduce((acc, response, index) => {
        //  acc[assets[index]] = response.data.rate;
          return acc;
        }, {});
        setPortfolio(exchangeRates);
      }
      fetchExchangeRates();
    }, []);
    return (
      <div className="Portfolio">
        <h1>Your Cryptocurrency Portfolio Tracker App</h1>
        <ul>
          {Object.entries(portfolio).map(([asset, exchangeRate]) => (
            <li key={asset}>{asset}: {exchangeRate}</li>
          ))}
        </ul>
      </div>
    );
}