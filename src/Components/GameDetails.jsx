
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    // Fetch details for the selected game based on gameId
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=a76bf17adc6e43058488116d102ce4eb`);
        const data = await response.json();
        setGameDetails(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!gameDetails) {
    return <p className='text-yellow-400 text-center' >Loading...</p>;
  }



  return (
    <div className="max-w-screen-lg mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-4 text-gray-300">{gameDetails.name}</h1>
    <img
      src={gameDetails.background_image}
      alt={gameDetails.name}
      className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg"
    />
    <p className="text-lg text-yellow-400">Released: {gameDetails.released}</p>
    <p className="text-lg text-gray-200">Rating: {gameDetails.rating}</p>
    <p className="text-lg text-gray-400">Playtime: {gameDetails.playtime}</p>
    <p className="text-lg text-gray-400">Metacritic: {gameDetails.metacritic}</p>
    <p className="text-lg text-teal-400">Website: {gameDetails.website}</p>
    <p className="text-lg text-lime-400 font-semibold">Description: <span className='text-slate-400 font-light' >{gameDetails.description_raw}</span> </p>

  </div>
  
  );
};

export default GameDetails;
