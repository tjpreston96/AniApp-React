import React, { useEffect, useState } from "react";
import "./ResultItemDetail.css";
import {
  addToCollection,
  removeFromCollection,
  showDetail,
  index,
} from "../../services/mediaService";
import { useLocation, useParams, useHistory } from "react-router-dom";
import AnimeDetail from "../AnimeDetail/AnimeDetail";
import MangaDetail from "../MangaDetail/MangaDetail";

const ResultItemDetail = ({ user }) => {
  const history = useHistory();
  const location = useLocation();
  const [result, setResult] = useState(location.state.result);
  const [collection, setCollection] = useState([]);
  const { slug, category } = useParams();

  // useEffect(() => {
  //   async function getFullCollection() {
  //     const collection = await index();
  //     setCollection(collection);
  //   }
  //   getFullCollection();
  // }, []);

  // const handleCollectionChange = () => {
  //   console.log(collection);
  //   console.log(result.id);
  //   console.log(collection.includes(result.id));

  //   collection.includes(result.id)
  //     ? removeFromCollection(result.id)
  //     : addToCollection({
  //         type: result.type,
  //         id: result.id,
  //         slug: result.attributes.slug,
  //       });
  // };

  // const handleCollectionChange = () => {
  //   if (result.favoritedBy) {
  //     result.favoritedBy.some((u) => {
  //       return u._id === user._id;
  //     })
  //       ? removeFromCollection(result)
  //       : addToCollection({
  //           type: result.type,
  //           id: result.id,
  //           slug: result.attributes.slug,
  //         });
  //   }
  // };

  return (
    <div className="detail">
      <h2>
        {result.type.charAt(0).toUpperCase() + result.type.slice(1)} Details
      </h2>
      {result.type === "anime" ? (
        <AnimeDetail
          result={result}
          // handleCollectionChange={handleCollectionChange}
        />
      ) : (
        <MangaDetail
          result={result}
          // handleCollectionChange={handleCollectionChange}
        />
      )}
    </div>
  );
};

export default ResultItemDetail;
