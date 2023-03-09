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
          {/* <!-- sidebar  --> */}
          <SideBar />
          {/* <!-- sidebar  -->

     <!-- main section  --> */}
          <section class="dashboard-main-sec">
            <TopBar />
            {/* <div class="top-profile">
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
            </div> */}
            <div class="inner-main">
              <div class="row">
                <div class="col-lg-8">
                  <div class="row top-3boxes">
                    <div class="col-lg-4 col-sm-6">
                      <div class="philbox">
                        <img src={p3} alt="" />
                        <h2>PHILChat</h2>
                        <p>Comming Soon</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="philbox">
                        <img src={p2} alt="" />
                        <h2 class="pb-smtext">
                          PHIL <span>Education</span>
                        </h2>
                        <p>Comming Soon</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="philbox">
                        <img src={p1} alt="" />
                        <h2>Balance</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row philmd-boxrow">
                    <div class="col-md-6">
                      <div class="philmd-box gradient-border">
                        <div class="pmd-boxcontent">
                          <h2>Main Address Balance</h2>
                        </div>
                        <div class="pmd-boximg">
                          <h3>$0</h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="philmd-box gradient-border">
                        <div class="pmd-boxcontent">
                          <h2>Staked Balance</h2>
                          <h3>0.0 PHL / 0.0000 USD</h3>
                        </div>
                        <div class="pmd-boximg">
                          <img src={coin1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-">
                      <div class="biggraph gradient-border">
                        <div class="charts-top">
                          <h2>Active Users</h2>
                          <div class="chart-month">
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
                          // style="height: 270px; width: 100%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="transactions gradient-border">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="all-transactions">
                          <h2 class="transaction-head">Transactions</h2>
                          <div class="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div class="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div class="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div class="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                          <div class="trans-price">
                            <h2>0.0 PHL / 0.0000 USD</h2>
                            <h3>+0%</h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="trans-right">
                          <img src={p1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="graphi">
                      <img src={graph} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- main section  --> */}
        </section>
      </main>
    </>
  );
};

export default Page;
