import { useEffect, useState } from "react";
import Card from "../components/Card";

const Coins = () => {
  const [coin, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <>
      <div className="container mx-auto mt-6">
        <div className="text-center mb-4">
          <h1 className="text-4xl">Available Currencies</h1>
          <p>Total Coins: 200৳</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {coin.slice(0, 10).map((u, i) => (
            <Card key={i} id={u.id} name={u.title} image={u.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Coins;
