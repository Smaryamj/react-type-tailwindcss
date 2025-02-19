import React from "react";
import AppBar from "../components/appbar";
import { useNavigate } from "react-router-dom";
import EditSVG from '../../icons/edit.svg';

const UserProfile = () => {
  const navigate = useNavigate(); // React Router for navigation
  return (
    <div className="bg-white min-h-screen">
      <AppBar
        title={"Profile"}
        bgColor="bg-white"
        onBack={() => navigate(-1)}
        trailingIcon={
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full transition pb-4"
          >
            <img src={EditSVG} />
          </button>
        }
      ></AppBar>
    </div>
  );
};
export default UserProfile;
