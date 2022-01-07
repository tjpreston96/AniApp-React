import React, { useEffect, useState } from "react";
import { mangaIndex, mangaCollection } from "../../services/mediaService";
import ResultsList from "../../components/ResultsList/ResultsList";

const MangaCollection = () => {
  // console.log(index())
  const [collection, setCollection] = useState();

  useEffect(() => {
    async function setupCollection() {
      const index = await mangaIndex();
      const c = await mangaCollection(index.join());
      setCollection(c);
    }
    setupCollection();
  }, []);

  

  return (
    <>
      <h1>Manga Collection</h1>
      <ResultsList results={collection} />
    </>
  );
};

export default MangaCollection;
