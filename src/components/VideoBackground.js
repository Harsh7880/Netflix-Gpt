import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe className="w-screen aspect-video bg-opacity-90"
        src={
          "https://www.youtube.com/embed/Icnysn53neU?si=" + trailerVideo?.key + "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
