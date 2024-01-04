import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../Contexts/GameContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { setPage, games } = useGameContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === '' || searchTerm.length < 3) {
      setSuggestions([]);
      return;
    }
  
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=a76bf17adc6e43058488116d102ce4eb&search=${searchTerm}`);
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
    };
  
    fetchSuggestions();
  }, [searchTerm]);
  

  

  const handleSearch = () => {
    const filteredGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setPage(1);
    setSuggestions([]); // Clear suggestions when the search button is clicked
    setSearchTerm(''); // Clear the search term
    navigate(`/search/${encodeURIComponent(searchTerm)}`, { state: { games: filteredGames } });
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // If Enter key is pressed, trigger the search
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center relative">
 <input
  type="text"
  placeholder="Search Games..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={handleKeyPress}
  className="p-2 sm:px-4 md:px-6 lg:px-8 mt-2 w-72 md:w-72 border border-gray-700 rounded-2xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500 text-sm md:text-base"
/>


  <button
    onClick={handleSearch}
    className="p-2 md:p-2 mt-2 text-gray-400 rounded flex items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current mr-2"
    >
      <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
    </svg>
  </button>
</div>

  );
};

export default SearchBar;