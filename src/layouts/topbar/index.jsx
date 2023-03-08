import React from "react";
import Notification from "../../assets/assets/Notification.png";
import Message from "../../assets/assets/Message.png";
import user from "../../assets/assets/user.png";

const TopBar = () => {
  return (
    <>
      <div class="top-profile">
        <div class="bell-notification">
          <img src={Notification} alt="" />
          <img src={Message} alt="" />
        </div>
        <div class="profile">
          <div class="userimg">
            <img src={user} alt="" />
          </div>
          <div class="userinfo">
            <h2>Wade Warren</h2>
            <h3>Super Admin</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
