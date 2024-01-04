import { createContext, useContext, useState, useEffect } from 'react';
import { fetchGames, fetchGenres } from '../Utils/Api';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const fetchData = async () => {
    try {
      console.log('Fetching data for page:', page, 'rating:', selectedRating, 'genre:', selectedGenre);
      const gamesData = await fetchGames(page, selectedRating, selectedGenre);
      setGames((prevGames) => [...new Set([...prevGames, ...gamesData])]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching game data:', error);
      setLoading(false);
    }
  };
  
  
  
  useEffect(() => {
    fetchData();
  }, [page, selectedRating, selectedGenre]); // Fetch data whenever the page or filters change

  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        const genresData = await fetchGenres();
        setGenres(genresData.results);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenresData();
  }, []);

  return (
    <GameContext.Provider value={{ games, loading,setGames, setPage, selectedRating, setSelectedRating, selectedGenre, setSelectedGenre, genres,setGenres }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
