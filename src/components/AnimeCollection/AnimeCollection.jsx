import React, { useEffect, useState } from "react";
import { animeIndex, animeCollection } from "../../services/mediaService";
import ResultsList from "../../components/ResultsList/ResultsList";

const AnimeCollection = () => {
  const [collection, setCollection] = useState();

  useEffect(() => {
    async function setupCollection() {
      const index = await animeIndex();
      const c = await animeCollection(index.join());
      setCollection(c);
    }
    setupCollection();
  }, []);

  return (
    <>
      <h1>Anime Collection</h1>
      <ResultsList results={collection} />
    </>
  );
};

export default AnimeCollection;
