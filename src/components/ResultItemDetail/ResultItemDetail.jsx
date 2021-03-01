import React from "react";
import "./ResultItemDetail.css";

const ResultItemDetail = ({ indResult }) => {
  const result = indResult;

  return (
    <div className="detail">
      <h2>
        {result.type.charAt(0).toUpperCase() + result.type.slice(1)} Details
      </h2>
      {result.attributes.youtubeVideoId ? (
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
          frameborder="0"
        ></iframe>
      ) : (
        <img src={result.attributes.posterImage.original} alt="posterImg" />
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
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default ResultItemDetail;

//   const topDisplay = () => {
//     if (result.type === 'manga') {
//       return (
//         <img
//           src={result.attributes.posterImage.original}
//           alt="posterImg.original"
//         />
//       );
//     } else {
//       return (
//         <iframe
//           id="ytplayer"
//           type="text/html"
//           title={result.attributes.canonicalTitle}
//           width="550"
//           height="360"
//           src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
//           frameborder="0"
//           allowfullscreen
//         ></iframe>
//       );
//     }
//   };
