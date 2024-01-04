import React, { useState, useEffect } from "react";
import '../App.css';

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=a76bf17adc6e43058488116d102ce4eb"
        );
        const data = await response.json();

        // Filter games with a rating of 4 or higher
        const popularGames = data.results.filter((game) => game.rating >= 4);

        // Sort by rating in descending order
        const sortedGames = popularGames.sort((a, b) => b.rating - a.rating);

        // Take the top 20 games
        const topGames = sortedGames.slice(0, 20);

        setGames(topGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular games:", error);
        setLoading(false);
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Popular Games</h1>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative overflow-hidden bg-white rounded-md shadow-md game-card"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-60 object-cover mb-4 rounded-t-md sm:rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-xl text-yellow-400 font-semibold">{game.name}</h2>
                <p>Released: {game.released}</p>
                <div className="flex items-center mb-2">
                  <p className="text-yellow-400 pr-1">&#9733;</p>{" "}
                  {/* Star symbol for rating */}
                  <p>{game.rating}</p>
                </div>
                {/* Add more game details as needed */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularGames;
