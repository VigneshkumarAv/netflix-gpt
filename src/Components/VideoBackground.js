import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import useGetMovieVideos from "../hooks/useGetMovieVideos";

const VideoBackground = (props) => {
  const { movieId } = props;
  const [trailerId, setTrailerId] = useState(null);
  useGetMovieVideos({ movieId: movieId, setTrailerId: setTrailerId });

  return (
    <div className="video-container">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        fullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
