import React from "react";
import Home from "../../assets/assets/Home.png";
import Profile from "../../assets/assets/Profile.png";
import content from "../../assets/assets/content.png";
import wallet from "../../assets/assets/wallet.png";
import nft from "../../assets/assets/nft.png";
import rep from "../../assets/assets/rep.png";
import setting from "../../assets/assets/setting.png";
import inv from "../../assets/assets/inv.png";
import logout from "../../assets/assets/logout.png";
import logo from "../../assets/assets/logo.png";
import logosm from "../../assets/assets/logosm.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <aside class="sidebar">
        {/* <!-- logo --> */}
        <div class="brand">
          <div class="logo">
            <img class="logobig" src={logo} alt="" />
            <img class="logosm" src={logosm} alt="" />
          </div>
          <div class="arrow-side">
            <span>
              <i class="fas fa-arrow-left"></i>
            </span>
          </div>
        </div>
        {/* <!-- logo -->
        <!-- list  --> */}
        <div class="navigation">
          <ul>
            <Link to="/dashboard">
              <li class="active">
                <a href="index.html">
                  <span>
                    <img src={Home} alt="" />
                  </span>{" "}
                  Dashboard
                </a>
              </li>
            </Link>
            <Link to="/user-management">
              <li>
                <a href="user-management.html">
                  <span>
                    <img src={Profile} alt="" />
                  </span>{" "}
                  User Management
                </a>
              </li>
            </Link>
            <li>
              <a href="#">
                <span>
                  <img src={content} alt="" />
                </span>{" "}
                Content Management
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={wallet} alt="" />
                </span>{" "}
                Wallet Management
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={nft} alt="" />
                </span>{" "}
                NFT Marketplace
                <br /> Management
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={rep} alt="" />
                </span>{" "}
                Reporting
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={setting} alt="" />
                </span>{" "}
                Settings
              </a>
            </li>
            <Link to="/invitations">
              <li>
                <a href="invitations.html">
                  <span>
                    <img src={inv} alt="" />
                  </span>{" "}
                  Invitations
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a href="#">
                  <span>
                    <img src={logout} alt="" />
                  </span>{" "}
                  Logout
                </a>
              </li>
            </Link>
          </ul>
        </div>
        {/* <!-- list  -->

        <!-- terms  --> */}
        <div class="terms">
          <p>Privacy Policy &nbsp;&nbsp;&nbsp; Terms of Use</p>
        </div>
        {/* <!-- terms  --> */}
      </aside>
    </>
  );
};

export default SideBar;
