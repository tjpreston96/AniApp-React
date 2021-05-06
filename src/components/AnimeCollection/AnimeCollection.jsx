import React, { useEffect, useState } from "react";
import { animeIdx } from "../../services/mediaService";

const AnimeCollection = () => {
  const [idx, setIdx] = useState([]);
  useEffect(() => {
    setIdx(animeIdx());
    console.log(idx);
  }, []);

  return (
    <>
      <h1>Anime Collection</h1>
    </>
  );
};

export default AnimeCollection;
