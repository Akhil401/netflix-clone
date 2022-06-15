import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./row.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  console.log(Math.PI);
  var number = 1.2;
  console.log(Math.floor(number));

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || movie?.name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.original_title}
              key={movie.id}
            />
          );
        })}
      </div>
      <div className="video">
        {trailerUrl && (
          <ReactPlayer
            url={trailerUrl}
            autoPlay
            controls={true}
            playing={true}
            width="100%"
            height="500px"
          />
        )}
      </div>
    </div>
  );
}

export default Row;
