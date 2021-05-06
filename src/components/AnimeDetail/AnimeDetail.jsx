import React, { useEffect } from "react";

const AnimeDetail = ({ user, result }) => {
  return (
    <>
      <iframe
        title="trailer"
        className="ytPlayer"
        src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="card detailCard">
        <h4 className="card-header text-center">{result.canonicalTitle}</h4>
        <div className="card-body">
          <p className="card-text">
            <b>Description:</b>
            <br />
            {result.description}
          </p>
          <p className="card-text">
            <b>Age Rating:</b> {result.ageRating}
          </p>
          <p className="card-text">
            <b>Rating:</b> {result.averageRating}
          </p>
          <p className="card-text">
            <b>Status:</b>
            {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
          </p>
          <p className="card-text">
            <b>Start:</b> {result.startDate}
          </p>
          <p className="card-text">
            <b>Finish:</b> {result.endDate ? result.endDate : "N/A"}
          </p>
          <button  className="btn gold">
            {result.favoritedBy.some((u) => {
              return u.email === user.email;
            })
              ? "Remove from Collection"
              : "Add to Collection"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
