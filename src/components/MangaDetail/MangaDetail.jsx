import React, { useEffect, useState } from "react";
import {
  index,
  addToCollection,
  removeFromCollection,
} from "../../services/mediaService";

const MangaDetail = ({ user, result }) => {
  console.log(result);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setCollection(index());
  }, []);
  // const collectionChange = (user) => {
  //   let collection = []
  //   if(result.id)
  // };

  const add = () => {
    addToCollection(
      {
        type: result.type,
        id: result.id,
        slug: result.attributes.slug,
      },
      result.type
    );
  };

  return (
    <>
      <img
        className="posterImg"
        src={result.attributes.posterImage.large}
        alt="posterImg"
      />
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
            <b>Age Rating:</b>{" "}
            {result.attributes.ageRating ? result.attributes.ageRating : "N/A"}
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

          <button className="btn gold" onClick={add}>
            Temp. Label
          </button>
        </div>
      </div>
    </>
  );
};

export default MangaDetail;
