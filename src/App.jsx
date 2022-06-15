import React from "react";
import "./App.css";
import Row from "./Row";
import { requests } from "./requests";
import Banner from "./Banner";
import Nav from "./nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.netflixOriginals}
        isLargeRow
      />
      <Row title="Now Playing" fetchUrl={requests.nowPlaying} />
      <Row title="Popular Movies" fetchUrl={requests.popularMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.topRatedMovies} />
      <Row title="Trending Movies" fetchUrl={requests.trendingMovies} />
      <Row title="Upcoming Movies" fetchUrl={requests.UpcominPlaying} />
      <Row title="Comdey Movies" fetchUrl={requests.comedyMovies} />
    </div>
  );
}

export default App;
