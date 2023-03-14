import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import React, { useContext } from "react";
import pencilIcon from "assets/assets/pencil-icon.svg";
import searchIcon from "assets/assets/search-icon.svg";
import filterIcon from "assets/assets/filter-icon.svg";
import delIcon from "assets/assets/del-icon.svg";
import dotsIcon from "assets/assets/dots-icon.svg";
import v1 from "assets/assets/v1.jpg";
import video from "assets/assets/video1.mp4";
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

                <div className="cms-box-wraper-videos">
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="cms-video-main">
                    <div className="video-box">
                      <video
                        width="320"
                        height="240"
                        controls
                        poster="assets/video-img.png"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video-content">
                      <h2 className="video-title">John Martin</h2>
                      <p class="video-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="video-action-btns">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
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
