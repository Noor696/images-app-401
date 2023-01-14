import React, { useState } from "react";
import ImageCard from "./ImageCard";
import data from "./data.json";
import "./card.css";

function Parent() {
  let [totalLiks, setTotalLiks] = useState(0);

  const incrementLikes = () => {
    setTotalLiks(totalLiks + 1);
  };

  return (
    <>
      <h1 id="hh1">Total Number of Likes : {totalLiks}</h1>

      {data.map((image) => (
        <ImageCard
          id={image._id}
          title={image.title}
          img={image.image_url}
          increment={incrementLikes}
        />
      ))}
    </>
  );
}

export default Parent;
