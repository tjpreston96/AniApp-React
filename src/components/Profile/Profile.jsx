import React from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="card profileCard">
        <div className="card-header text-center">
          <h5>{user.name}</h5>
        </div>{" "}
        <div className="card-body">
          <div className="card-title">
            <b>Email:</b> {user.email}
          </div>
          <div className="card friendCard">
            <div className="card-header">Friends List</div>
            <div className="card-body">
              <div className="card-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
