import React, { useState, useEffect } from "react";
import { useGameContext } from "../Contexts/GameContext";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const {
    games,
    loading,
    setPage,
    selectedGenre,
    setSelectedGenre,
    genres,
    setGames,
    setGenres,
  } = useGameContext();

  useEffect(() => {
    // Fetch available genres
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/genres?key=a76bf17adc6e43058488116d102ce4eb"
        );
        const data = await response.json();
        setGenres(data.results); // Set the genres state, not the selectedGenre state
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    // Fetch data when the page changes or when filters change
    setPage(1);
  }, [selectedGenre]);

  useEffect(() => {
    // Reset games when genre changes
    setGames([]);
  }, [selectedGenre]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    // Modern Loading skeleton while data is being fetched
    return (
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(6).keys()].map((index) => (
          <div key={`skeleton-${index}`} className="bg-gray-800 rounded-md shadow-md">
            <Skeleton height={60} className="w-full h-60 object-cover rounded-t-md sm:rounded-md" />
            <div className="p-4">
              <Skeleton height={20} width={150} />
              <Skeleton height={16} width={100} />
              <Skeleton height={16} width={80} />
              <p className="text-gray-400" >Loading....</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handleLoadMore = () => {
    setPage((prevPage) => {
      console.log("New Page:", prevPage + 1);
      return prevPage + 1;
    });
  };

  const handleGenreChange = (event) => {
    const selectedGenreSlug = event.target.value;

    if (selectedGenreSlug === "") {
      setSelectedGenre([]);
    } else {
      const selectedGenre = genres.find(
        (genre) => genre.slug === selectedGenreSlug
      );
      setSelectedGenre([selectedGenre]);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto mb-10 min-h-screen ">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=DotGothic16&display=swap"
        rel="stylesheet"
      />


      <div className="relative overflow-hidden mb-5 mt-3 rounded-lg shadow-md max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <Slider {...sliderSettings}>
        {/* Add your carousel images here */}
        <div className="w-full h-36 overflow-hidden">
          <img
            src="https://i.postimg.cc/132nsZQ8/bg-game-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-36 overflow-hidden">
          <img
            src="https://i.postimg.cc/HxCr84jH/bg-game-2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-36 overflow-hidden">
          <img
            src="https://i.postimg.cc/LsPqs09N/bg-game-3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3 bg-opacity-75 bg-black">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Bungee Spice, sans-serif' }}>New & Trending</h1>
        <p className="text-lg" style={{ fontFamily: 'DotGothic16, sans-serif' }} >Tap to see details</p>
      </div>
    </div>

      {/* Filter options */}
      <div className="mb-4 flex items-center justify-center">
        <label htmlFor="genreFilter" className="mr-2 font-semibold text-gray-400">
          Filter by Genre:
        </label>
        <div className="relative">
          <select
            id="genreFilter"
            value={selectedGenre[0]?.slug || ""}
            onChange={handleGenreChange}
            className="appearance-none py-2 pl-4 pr-8 border border-gray-300 rounded-md leading-tight focus:outline-none focus:border-blue-500"
          >
            <option value="">All Genres</option>
            {Array.isArray(genres)
              ? genres.map((genre) => (
                  <option key={genre.id} value={genre.slug}>
                    {genre.name}
                  </option>
                ))
              : null}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {games.map((game, index) => (
    <Link key={`${game.id}-${index}`} to={`/game/${game.id}`}>
      <div className="relative overflow-hidden bg-gray-800 rounded-md shadow-md hover:shadow-lg transition duration-300">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-60 object-cover mb-4 rounded-t-md sm:rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h2 className="text-xl text-white font-semibold mb-2">{game.name}</h2>
          <p className="text-sm text-yellow-300">Released: {game.released}</p>
          <p className="text-sm text-gray-300">Rating: {game.rating}</p>
        </div>
      </div>
    </Link>
  ))}
</div>



      <div className="flex items-center justify-center">
  <button
    onClick={handleLoadMore}
    className="mt-4 p-3 bg-slate-700 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring focus:border-blue-300"
  >
    Load More
  </button>
</div>

    </div>
  );
};

export default Home;
