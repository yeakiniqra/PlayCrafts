// Genres.jsx
import React, { useEffect, useState } from 'react';

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres data from API
    const fetchGenres = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/genres?key=a76bf17adc6e43058488116d102ce4eb');
        const data = await response.json();
        setGenres(data.results);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8">
    <h1 className="text-3xl text-center font-semibold mb-4">Genres</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="relative overflow-hidden bg-gray-800 rounded shadow text-white"
        >
          <img
            src={genre.image_background}
            alt={genre.name}
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className="text-xl text-gray-300 font-semibold mb-2">{genre.name}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default Genres;
