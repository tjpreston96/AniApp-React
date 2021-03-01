import React from "react";
import "./Profile.css"

const Profile = ({ user }) => {
  return (
    <div className='profile'>
      <h2>User Profile</h2>
      <div className="card profileCard">
        <div className="card-header text-center"><h5>{user.name}</h5></div>{" "}
      </div>
    </div>
  );
};

export default Profile;
