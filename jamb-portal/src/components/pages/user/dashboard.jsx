import React from "react";
import Sidebar from "../../nav/sidebar";
import styled from "styled-components";
const profileImage = require("../../../images/profile.jpg");

const ProfileImage = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 280px 280px;
`;
const ImgContainer = styled.div`
  margin-left: 30%;
`;

const UserDashboard = () => {
  return (
    <>
      <Sidebar />;
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ImgContainer>
              <ProfileImage
                src={profileImage}
                className="img-fluid profile-img"
              />
            </ImgContainer>
          </div>
          <div className="col-lg-6">
            <div className="profile">
              <h3>Name:</h3>
              <h3>Email</h3>
              <h3>Dob:</h3>
              <h3>State of Origin:</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
