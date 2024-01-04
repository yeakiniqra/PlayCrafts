
import { GameProvider } from './Contexts/GameContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import SearchBar from './Components/SearchBar';
import SearchResult from './Pages/SearchResult';
import GameDetails from './Components/GameDetails';
import Genres from './Components/Genres';
import Stores from './Components/Stores';
import Platforms from './Components/Platforms';
import PopularGames from './Components/PopularGames';
import './App.css';

function App() {
  const isMobile = window.innerWidth < 768; // Adjust the threshold 

  return (
    <Router>
      <GameProvider>
        <div className="flex flex-col min-h-screen">
          {isMobile && <Navbar />}
          <div className="flex">
            {!isMobile && <Sidebar />}
            <div className="flex flex-col w-full">
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/game/:gameId" element={<GameDetails />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/platforms" element={<Platforms />} />
                <Route path="/popular" element={<PopularGames />} />
              </Routes>
            </div>
          </div>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
