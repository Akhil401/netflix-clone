const API_KEY = "abc7a659c488b2236062455d54037801";

export const requests = {
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  nowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  actionMovies: `/discover/movie?api_key=%${API_KEY}&with_genres=28`,
  latestPlaying: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  popularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trendingMovies: `/trending/all/day?api_key=${API_KEY}`,
  UpcominPlaying: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?ap_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key3D${API_KEY}&with_genres-D10749`,
};

// `/trending/all/week?api_key=${API_KEY}&language3Den-US`,
// ginals: /discover/tv?api_key=${API_KEY}&with_networks=213`,
// `/movie/top_rated?api_key=D${API_KEY}&languageen-US`,
// es: `/discover/movie?api_key=%${API_KEY}&with_genres=28`,
// es: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// es: `/discover/movie?ap_key=${API_KEY}&with_genres=27
// ies: `/discover/movie?api_key3D${API_KEY}&with_genres-D10749`,
// ies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
