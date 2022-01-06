import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ props }) => {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      <h1>
        {username} Profile{" "}
        <button onClick={() => navigate("/about")}>Click to about page</button>
      </h1>
    </div>
  );
};

export default Profile;
