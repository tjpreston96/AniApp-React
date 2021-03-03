import React, { useEffect, useState } from "react";
import "./ResultItemDetail.css";
import {
  addToCollection,
  removeFromCollection,
  showDetail,
} from "../../services/mediaService";
import { useParams } from "react-router-dom";

const ResultItemDetail = ({ indResult, user }) => {
  const [result, setResult] = useState(indResult);
  const { slug, category } = useParams();

  const getDetails = async () => {
    const detail = await showDetail(slug, category);
    setResult(detail);
  };

  useEffect(() => getDetails(), []);

  const handleCollectionChange = () => {
      result.favoritedBy.some((u) => {
        return u.email === user.email;
      })
        ? removeFromCollection()
        : addToCollection(
            {
              title: result.attributes.title,
              slug: result.attributes.slug,
              status: result.attributes.status,
              averageRating: result.attributes.averageRating,
              startDate: result.attributes.startDate,
              endDate: result.attributes.endDate,
              description: result.attributes.description,
              imageUrl: result.attributes.posterImage.large,
              videoUrl: result.attributes.youtubeVideoId
                ? result.attributes.youtubeVideoId
                : "",
            },
            result.type
          );
    
  };

  return (
    <div className="detail">
      <h2>
        {result.type.charAt(0).toUpperCase() + result.type.slice(1)} Details
      </h2>
      {result.attributes.youtubeVideoId ? (
        <iframe
          title="trailer"
          className="ytPlayer"
          src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
          frameborder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="posterImg"
          src={result.attributes.posterImage.large}
          alt="posterImg"
        />
      )}

      <div className="card detailCard">
        <h4 className="card-header text-center">
          {result.attributes.canonicalTitle}
        </h4>
        <div className="card-body">
          <p className="card-text">
            <b>Description:</b>
            <br />
            {result.attributes.description}
          </p>
          <p className="card-text">
            <b>Age Rating:</b> {result.attributes.ageRating}
          </p>
          <p className="card-text">
            <b>Rating:</b> {result.attributes.averageRating}
          </p>
          <p className="card-text">
            <b>Status:</b>{" "}
            {result.attributes.status.charAt(0).toUpperCase() +
              result.attributes.status.slice(1)}
          </p>
          <p className="card-text">
            <b>Start:</b> {result.attributes.startDate}
          </p>
          <p className="card-text">
            <b>Finish:</b>{" "}
            {result.attributes.endDate ? result.attributes.endDate : "N/A"}
          </p>
          <button onClick={handleCollectionChange} className="btn gold">
            { result.favoritedBy ? (result.favoritedBy.some(u => {return u.email === user.email})? "Remove from Collection": "Add to Collection" ): "Add to Collection"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultItemDetail;


// if (favoritedBy.some(u => {return u.email === user.email})) {