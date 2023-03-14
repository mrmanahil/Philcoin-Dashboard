import React, { useContext, useEffect } from "react";
import p3 from "assets/assets/p3.png";
import p2 from "assets/assets/p2.png";
import p1 from "assets/assets/p1.png";
import coin1 from "assets/assets/coin (1).png";
import bar from "assets/assets/bar.png";
import line from "assets/assets/line.png";
import graph from "assets/assets/graph.png";
import { Link } from "react-router-dom";
import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import { SidebarContext } from "@core/context/SidebarContext";

const Page = () => {
  const { isDrawerOpen } = useContext(SidebarContext);

  return (
    <>
      <main>
        <section
          class={`main-dashboard-sec ${
            isDrawerOpen ? "main-dashboard-secbig" : ""
          }`}
        >
          <SideBar />
          <section
            class={`dashboard-main-sec ${
              !isDrawerOpen ? `main-dashboard-secbig` : ""
            }`}
          >
            <TopBar />
            <div className="inner-main">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row top-3boxes">
                    <div className="col-lg-4 col-sm-6">
                      <div className="philbox">
                        <img src={p3} alt="" />
                        <h2>PHILChat</h2>
                        <p>Comming Soon</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="philbox">
                        <img src={p2} alt="" />
                        <h2 className="pb-smtext">
                          PHIL <span>Education</span>
                        </h2>
                        <p>Comming Soon</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="philbox">
                        <img src={p1} alt="" />
                        <h2>Balance</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row philmd-boxrow">
                    <div className="col-md-6">
                      <div className="philmd-box gradient-border">
                        <div className="pmd-boxcontent">
                          <h2>Main Address Balance</h2>
                        </div>
                        <div className="pmd-boximg">
                          <h3>$0</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="philmd-box gradient-border">
                        <div className="pmd-boxcontent">
                          <h2>Staked Balance</h2>
                          <h3>0.0 PHL / 0.0000 USD</h3>
                        </div>
                        <div className="pmd-boximg">
                          <img src={coin1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-">
                      <div className="biggraph gradient-border">
                        <div className="charts-top">
                          <h2>Active Users</h2>
                          <div className="chart-month">
                            <span>
                              <img src={bar} alt="" />
                            </span>
                            <span>
                              <img src={line} alt="" />
                            </span>

                            <form action="">
                              <select name="" id="">
                                <option value="" selected>
                                  Month
                                </option>
                                <option value="" selected>
                                  Jan
                                </option>
                                <option value="" selected>
                                  Feb
                                </option>
                              </select>
                            </form>
                          </div>
                        </div>
                        <div
                          id="chartContainer"
                          style={{ height: "270px", width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="transactions gradient-border">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="all-transactions">
                          <h2 className="transaction-head">Transactions</h2>
                          <div className="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div className="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div className="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div className="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div className="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="trans-right">
                          <img src={p1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="graphi">
                      <img src={graph} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
