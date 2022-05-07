import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [exchange, setExchange] = useState(0);
  const onChange = (event) => setExchange(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(exchange);

  return (
    <div>
      <h1>The Coins! {loading ? "Loading" : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={exchange}
        type="number"
        placeholder="You can Exchange your USD to Coin! "
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {/* {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))} */}
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : {exchange / coin.quotes.USD.price}{" "}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
