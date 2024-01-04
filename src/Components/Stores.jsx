import React, { useState, useEffect } from "react";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/stores?key=a76bf17adc6e43058488116d102ce4eb"
        );
        const data = await response.json();
        setStores(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return (
    <div>
    <h1 className="text-3xl text-center mt-3 font-semibold text-white mb-4">Game Stores</h1>
    {loading ? (
      <p className="text-white">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="relative overflow-hidden bg-gray-800 rounded shadow text-white"
          >
            <img
              src={store.image_background}
              alt={store.name}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
              <p className="text-yellow-400" >{store.domain}</p>
              <p className="text-gray-500" >{store.games_count} Games</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default Stores;
