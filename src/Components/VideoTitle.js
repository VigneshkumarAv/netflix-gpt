import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-44 px-12 relative text-white bg-black bg-opacity-40  w-full h-screen z-10">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-4 w-1/4">{overview.slice(0, 150) + "..."}</p>
      <div>
        <button className="p-2 px-8 bg-white rounded-lg text-black w-22 hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-4 p-2 px-8 w-22 bg-gray-500 bg-opacity-50 rounded-lg text-white hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
