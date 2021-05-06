import React, { useEffect, useState } from "react";
import "./ResultItemDetail.css";
import {
  addToCollection,
  removeFromCollection,
  showDetail,
} from "../../services/mediaService";
import { useLocation, useParams, useHistory } from "react-router-dom";
import AnimeDetail from "../AnimeDetail/AnimeDetail";
import MangaDetail from "../MangaDetail/MangaDetail";

const ResultItemDetail = ({ user }) => {
  const history = useHistory();
  const location = useLocation();
  const [result, setResult] = useState(location.state.result);
  const { slug, category } = useParams();

  const getDetails = async () => {
    const detail = await showDetail(slug, category);
    // Checking to see if in database
    if (detail) {
      console.log(detail);
      // setResult(detail);
    }
  };

  useEffect(() => getDetails(), []);

  // const handleCollectionChange = () => {
  //   if (result.favoritedBy) {
  //     result.favoritedBy.some((u) => {
  //       return u._id === user._id;
  //     })
  //       ? removeFromCollection(result, result.type)
  //       : addToCollection(
  //           {
  //             title: result.title,
  //             type: result.type,
  //             slug: result.slug,
  //             status: result.status,
  //             averageRating: result.averageRating,
  //             startDate: result.startDate,
  //             endDate: result.endDate,
  //             description: result.description,
  //             imageUrl: result.imageUrl,
  //             videoUrl: result.videoUrl ? result.videoUrl : "",
  //           },
  //           result.type
  //         );
  //   }
  // };

  return (
    <div className="detail">
      <h2>
        {result.type.charAt(0).toUpperCase() + result.type.slice(1)} Details
      </h2>
      {result.type === "anime" ? (
        <AnimeDetail result={result} />
      ) : (
        <MangaDetail result={result} />
      )}
    </div>
  );
};

export default ResultItemDetail;
