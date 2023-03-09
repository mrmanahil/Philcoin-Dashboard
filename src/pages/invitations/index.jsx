import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import React from "react";
import dotsIcon from "assets/assets/dots-icon.svg";
import checkk from "assets/assets/checkk.png";
import u1 from "assets/assets/u1.png";
import close from "assets/assets/close.png";
import TableHeader from "@core/components/apps/invitations/components/TableHeader";
import Drawer from "@core/components/apps/invitations/components/Modal";
import useToggleDrawer from "@core/hooks/useToggleDrawer";
import { useInvitation } from "@core/hooks/apps/useExample";

const Page = () => {
  const { serviceId, isDrawerOpen, handleDrawer } = useToggleDrawer();
  const { store } = useInvitation();
  // console.log(store?.entities);

  return (
    <>
      <main>
        <section class="main-dashboard-sec">
          {/* <!-- sidebar  --> */}
          <SideBar />
          {/* <aside class="sidebar">
            <div class="brand">
              <div class="logo">
                <img class="logobig" src="assets/logo.png" alt="" />
                <img class="logosm" src="assets/logosm.png" alt="" />
              </div>
              <div class="arrow-side">
                <span>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </div>
            </div>
            <div class="navigation">
              <ul>
                <li class="active">
                  <a href="index.html">
                    <span>
                      <img src="assets/Home.png" alt="" />
                    </span>{" "}
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="user-management.html">
                    <span>
                      <img src="assets/Profile.png" alt="" />
                    </span>{" "}
                    User Management
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/content.png" alt="" />
                    </span>{" "}
                    Content Management
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/wallet.png" alt="" />
                    </span>{" "}
                    Wallet Management
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/nft.png" alt="" />
                    </span>{" "}
                    NFT Marketplace
                    <br /> Management
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/rep.png" alt="" />
                    </span>{" "}
                    Reporting
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/setting.png" alt="" />
                    </span>{" "}
                    Settings
                  </a>
                </li>
                <li>
                  <a href="invitations.html">
                    <span>
                      <img src="assets/inv.png" alt="" />
                    </span>{" "}
                    Invitations
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="assets/logout.png" alt="" />
                    </span>{" "}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div class="terms">
              <p>Privacy Policy &nbsp;&nbsp;&nbsp; Terms of Use</p>
            </div>
          </aside> */}
          {/* <!-- sidebar  --> */}

          {/* <!-- main section  --> */}
          <section class="dashboard-main-sec">
            <TopBar />
            {/* <div class="top-profile">
              <div class="bell-notification">
                <img src="assets/Notification.png" alt="" />
                <img src="assets/Message.png" alt="" />
              </div>
              <div class="profile">
                <div class="userimg">
                  <img src="assets/user.png" alt="" />
                </div>
                <div class="userinfo">
                  <h2>Wade Warren</h2>
                  <h3>Super Admin</h3>
                </div>
              </div>
            </div> */}

            <div class="inner-main">
              <div class="usm-sec-main gradient-border border-radius-12 invitation-sec">
                <TableHeader
                  value={""}
                  handleFilter={() => {}}
                  toggle={() => handleDrawer(null)}
                />
                {/* <div class="usm-wraper">
                  <div class="cm-filters">
                    <form action="" class="usm-search-form">
                      <div class="form-group">
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
                    <div class="usm-filter-box">
                      <button>
                        <img src={filterIcon} alt="" />
                      </button>
                    </div>
                  </div>
                  <div class="add-user-btn">
                    <button
                      class="add-btn prim-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#addUserModal"
                    >
                      Invite People
                    </button>
                  </div>
                </div> */}
                <div class="ums-table-main">
                  <table class="table ums-table" id="ums-table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>

                        <th scope="col">Rights</th>
                        <th scope="col">Signed up</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src={u1} alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src={checkk} alt="" />
                            </button>
                            <button class="btn-del">
                              <img src={close} alt="" />
                            </button>
                            <button>
                              <img src={dotsIcon} alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u2.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u3.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u4.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u5.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u6.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u7.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="user-info">
                            <div class="img-box">
                              <img src="./assets/u8.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
                        </td>

                        <td>
                          <div class="rights-btns">
                            <button class="btn-approved">Approve</button>
                            <button class="btn-reject">Reject</button>
                          </div>
                        </td>
                        <td>
                          <div class="status-btns">
                            <button class="btn-edit">
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button class="btn-del">
                              <img src="./assets/close.png" alt="" />
                            </button>
                            <button>
                              <img src="./assets/dots-icon.svg" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- main section  --> */}
        </section>

        {/* <!-- Add User Modal --> */}
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="addUserModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-dialog-centered modal-box">
            <div class="modal-content">
              <div class="row">
                <div class="col-12">
                  <div class="modal-header-text">
                    <h2 class="modal-title">Invite Friends</h2>
                    <button
                      type="button"
                      class="btn-close user"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src="assets/close-icon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="modal-body">
                <div class="adduser-form">
                  <form action="" class="signup-form user-form">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label for="name" class="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="email" class="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="btn-box text-center">
                          <button class="add-userBtn">Invite</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Add User Modal --> */}
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="addUserModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-dialog-centered modal-box">
            <div class="modal-content">
              <div class="row">
                <div class="col-12">
                  <div class="modal-header-text">
                    <h2 class="modal-title">Invite Friends</h2>
                    <button
                      type="button"
                      class="btn-close user"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src="assets/close-icon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="modal-body">
                <div class="adduser-form">
                  <form action="" class="signup-form user-form">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label for="name" class="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="email" class="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="btn-box text-center">
                          <button class="add-userBtn">Invite</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          open={isDrawerOpen}
          serviceId={serviceId}
          toggle={() => handleDrawer(null)}
        />
        {/* <!-- End --> */}
      </main>
    </>
  );
};

export default Page;
