import React from "react";
import Notification from "../../assets/assets/Notification.png";
import Message from "../../assets/assets/Message.png";
import user from "../../assets/assets/user.png";
import { useAuth } from "hooks/useAuth";

const TopBar = () => {
  const { user: SigninUser } = useAuth();

  return (
    <>
      <div className="top-profile">
        <div className="bell-notification">
          <img src={Notification} alt="" />
          <img src={Message} alt="" />
        </div>
        <div className="profile">
          <div className="userimg">
            <img src={user} alt="" />
          </div>
          <div className="userinfo">
            <h2>{SigninUser?.firstName + " " + SigninUser?.lastName}</h2>
            <h3 style={{ textTransform: "capitalize" }}>{SigninUser?.role}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
