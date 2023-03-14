import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import React, { useContext } from "react";
import pencilIcon from "../../assets/assets/pencil-icon.svg";
import searchIcon from "../../assets/assets/search-icon.svg";
import filterIcon from "../../assets/assets/filter-icon.svg";
import delIcon from "../../assets/assets/del-icon.svg";
import dotsIcon from "../../assets/assets/dots-icon.svg";
import u1 from "../../assets/assets/u1.png";
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
                <div className="usm-wraper">
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
                  <div className="add-user-btn">
                    <button className="add-btn prim-btn">Add User</button>
                  </div>
                </div>
                <div className="ums-table-main">
                  <table class="table ums-table" id="ums-table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Rights</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="user-info">
                            <div className="img-box">
                              <img src={u1} alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>
                        <td>
                          <p class="user-phone">+1 202 555 0156</p>
                        </td>
                        <td>
                          <div className="rights-btns">
                            <button className="btn-approved">Approve</button>
                            <button className="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div className="status-btns">
                            <button className="btn-edit">
                              <img src={pencilIcon} alt="" />
                            </button>
                            <button className="btn-del">
                              <img src={delIcon} alt="" />
                            </button>
                            <button>
                              <img src={dotsIcon} alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- main section  --> */}
        </section>

        {/* <!-- End --> */}
      </main>
    </>
  );
};

export default Page;
