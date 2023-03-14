import React, { useContext } from "react";
import Home from "assets/assets/Home.png";
import Profile from "assets/assets/Profile.png";
import content from "assets/assets/content.png";
import wallet from "assets/assets/wallet.png";
import nft from "assets/assets/nft.png";
import rep from "assets/assets/rep.png";
import setting from "assets/assets/setting.png";
import inv from "assets/assets/inv.png";
import logoutImg from "assets/assets/logout.png";
import logo from "assets/assets/logo.png";
import logosm from "assets/assets/logosm.png";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from "@core/context/SidebarContext";
import { useAuth } from "hooks/useAuth";

const SideBar = () => {
  const styles = {
    textDecoration: "none",
  };

  const { isDrawerOpen, closeDrawer } = useContext(SidebarContext);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <>
      <aside class={`sidebar ${!isDrawerOpen ? `sidebarsm` : ""}`}>
        {/* <!-- logo --> */}
        <div className="brand">
          <div className="logo">
            <img class="logobig" src={logo} alt="" />
            <img class="logosm" src={logosm} alt="" />
          </div>
          <div className="arrow-side arrowscale" onClick={() => closeDrawer()}>
            <span>
              <i class={`fas fa-arrow-${isDrawerOpen ? `right` : `left`}`}></i>
            </span>
          </div>
        </div>
        {/* <!-- logo -->
        <!-- list  --> */}
        <div className="navigation">
          <ul>
            <Link to="/dashboard" style={styles}>
              <li class="active">
                <a href="">
                  <span>
                    <img src={Home} alt="" />
                  </span>{" "}
                  Dashboard
                </a>
              </li>
            </Link>
            <Link to="/user-management" style={styles}>
              <li>
                <a href="user-management.html">
                  <span>
                    <img src={Profile} alt="" />
                  </span>{" "}
                  User Management
                </a>
              </li>
            </Link>
            <Link to="/content-management" style={styles}>
              <li>
                <a href="#">
                  <span>
                    <img src={content} alt="" />
                  </span>{" "}
                  Content Management
                </a>
              </li>
            </Link>
            <Link to="/wallet-management" style={styles}>
              <li>
                <a href="#">
                  <span>
                    <img src={wallet} alt="" />
                  </span>{" "}
                  Wallet Management
                </a>
              </li>
            </Link>
            <Link to="" style={styles}>
              <li>
                <a href="#">
                  <span>
                    <img src={nft} alt="" />
                  </span>{" "}
                  NFT Marketplace
                  <br /> Management
                </a>
              </li>
            </Link>
            <Link to="" style={styles}>
              <li>
                <a href="#">
                  <span>
                    <img src={rep} alt="" />
                  </span>{" "}
                  Reporting
                </a>
              </li>
            </Link>
            <Link to="" style={styles}>
              <li>
                <a href="#">
                  <span>
                    <img src={setting} alt="" />
                  </span>{" "}
                  Settings
                </a>
              </li>
            </Link>
            <Link to="/invitations" style={styles}>
              <li>
                <a href="invitations.html">
                  <span>
                    <img src={inv} alt="" />
                  </span>{" "}
                  Invitations
                </a>
              </li>
            </Link>
            <li onClick={() => handleLogout()}>
              <a>
                <span>
                  <img src={logoutImg} alt="" />
                </span>{" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- list  -->

        <!-- terms  --> */}
        <div className="terms">
          <p>Privacy Policy &nbsp;&nbsp;&nbsp; Terms of Use</p>
        </div>
        {/* <!-- terms  --> */}
      </aside>
    </>
  );
};

export default SideBar;
