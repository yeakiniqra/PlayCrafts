// export const fetchGames = async () => {
//     try {
//       const response = await fetch('https://api.rawg.io/api/games?key=a76bf17adc6e43058488116d102ce4eb');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//       return [];
//     }
//   };


//   export const fetchGnre = async () => {
//     try {
//       const response = await fetch('https://api.rawg.io/api/genres?key=a76bf17adc6e43058488116d102ce4eb');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//       return [];
//     }
//   }
  
export const fetchGames = async (page, rating, genres) => {
  try {
    let apiUrl = `https://api.rawg.io/api/games?key=a76bf17adc6e43058488116d102ce4eb&page=${page}`;

    if (rating) {
      apiUrl += `&rating=${rating}`;
    }

    if (genres && Array.isArray(genres) && genres.length > 0) {
      const genreSlugs = genres.map((genre) => genre.slug).join(',');
      apiUrl += `&genres=${genreSlugs}`;
    }
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching game data:', error);
    return [];
  }
};


export const fetchGenres = async () => {
  try {
    const response = await fetch('https://api.rawg.io/api/genres?key=a76bf17adc6e43058488116d102ce4eb');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};
