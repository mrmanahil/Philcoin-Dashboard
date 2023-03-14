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

  const sidebarData = [
    {
      link: "/dashboard",
      title: "Dashboard",
      role: ["admin", "user"],
    },
    {
      link: "/wallet-management",
      title: "User Management",
      role: ["admin"],
    },
    {
      link: "/wallet-management",
      title: "Content Management",
      role: ["admin"],
    },
    {
      link: "/wallet-management",
      title: "Wallet Management",
      role: ["admin"],
    },
    {
      link: "/wallet-management",
      title: "NFT Marketplace Management",
      role: ["admin"],
    },
    {
      link: "/wallet-management",
      title: "Reporting",
      role: ["admin"],
    },
    {
      link: "/invitations",
      title: "Invitations",
      role: ["admin", "user"],
    },
  ];

  const { user } = useAuth();

  return (
    <>
      <aside class={`sidebar ${!isDrawerOpen ? `sidebarsm` : ""}`}>
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
        <div className="navigation">
          <ul>
            {sidebarData
              ?.filter((i, e) => i?.role?.includes(user?.role))
              .map((item, index) => {
                return (
                  <Link to={item?.link} style={styles} key={index}>
                    <li class="active">
                      <a href="">
                        <span>
                          <img src={Home} alt="" />
                        </span>
                        {item?.title}
                      </a>
                    </li>
                  </Link>
                );
              })}
            <li onClick={() => handleLogout()} style={{ cursor: "pointer" }}>
              <a>
                <span>
                  <img src={logoutImg} alt="" />
                </span>{" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="terms">
          <p>Privacy Policy &nbsp;&nbsp;&nbsp; Terms of Use</p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
