import React, { useState, useEffect } from "react";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/platforms?key=a76bf17adc6e43058488116d102ce4eb"
        );
        const data = await response.json();
        setPlatforms(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching platforms:", error);
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8">
    <h1 className="text-3xl font-semibold mb-4">Game Platforms</h1>
    {loading ? (
      <p className="text-white">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {platforms.map((platform) => (
          <div key={platform.id} className="relative overflow-hidden bg-gray-800 rounded-md shadow-md">
            <img
              src={platform.image_background}
              alt={platform.name}
              className="w-full h-60 object-cover mb-4 rounded-t-md sm:rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h2 className="text-xl font-semibold">{platform.name}</h2>
              <p>{platform.platform}</p>
              <p className="text-yellow-400" >Total Games:{platform.games_count}</p>
              {/* Add more platform details as needed */}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default Platforms;
