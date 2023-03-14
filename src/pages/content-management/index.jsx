import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import React, { useContext } from "react";
import pencilIcon from "assets/assets/pencil-icon.svg";
import searchIcon from "assets/assets/search-icon.svg";
import filterIcon from "assets/assets/filter-icon.svg";
import delIcon from "assets/assets/del-icon.svg";
import dotsIcon from "assets/assets/dots-icon.svg";
import v1 from "assets/assets/v1.jpg";
import { SidebarContext } from "@core/context/SidebarContext";

const Page = () => {
  const { isDrawerOpen } = useContext(SidebarContext);

  return (
    <>
      <main>
        <section className="main-dashboard-sec">
          <SideBar />
          <section
            class={`dashboard-main-sec ${
              !isDrawerOpen ? `main-dashboard-secbig` : ""
            }`}
          >
            <TopBar />
            <div className="inner-main">
              <div className="usm-sec-main gradient-border border-radius-12">
                <div className="usm-wraper cms">
                  <div className="cm-filters">
                    <form action="" class="usm-search-form">
                      <div className="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search here"
                        />
                        <button>
                          <img src={searchIcon} alt="" />
                        </button>
                      </div>
                    </form>
                    <div className="usm-filter-box">
                      <button>
                        <img src={filterIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cms-box-wraper">
                  {/* Mapping Here */}
                  <div className="cms-box-main">
                    <div className="cms-img">
                      <img src={v1} alt="" />
                    </div>
                    <div className="cms-content">
                      <div className="cms-title">
                        <h3>
                          About Lecture | Biology <span> by Lena Josh</span>{" "}
                        </h3>
                        <div className="dropdown cms-dropdown">
                          <button
                            class="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fas fa-ellipsis-v"></i>
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                <span>
                                  <i class="fas fa-plus"></i>
                                </span>
                                Adding
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                <span>
                                  <i class="fas fa-pencil-alt"></i>
                                </span>
                                Editing
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                <span>
                                  <i class="fas fa-trash-alt"></i>
                                </span>{" "}
                                Deleting
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 class="csm-author">
                        Lena Josh{" "}
                        <span>
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </h4>
                      <p class="cms-views">
                        <span>3456K views</span> - <span>4 monts ago</span>
                      </p>
                    </div>
                  </div>
                  {/* Mapping Ends */}
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
