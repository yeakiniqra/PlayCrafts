import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.games || state.games.length === 0) {
    return <p className='text-center items-center text-yellow-400 text-2xl font-semibold' >No results found</p>;
  }

   // Deduplicate the games based on their IDs
   const uniqueGames = state.games.reduce((unique, game) => {
    if (!unique.some((uniqueGame) => uniqueGame.id === game.id)) {
      unique.push(game);
    }
    return unique;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-8">
    <h1 className="text-3xl font-semibold mb-6">Search Results</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {uniqueGames.map((game) => (
        <div key={game.id} className="relative overflow-hidden bg-gray-800 rounded-lg shadow-md">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-60 object-cover mb-4 rounded-t-md sm:rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-400">Released: {game.released}</p>
            <p className="text-gray-400">Rating: {game.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  
  );
};

export default SearchResult;
