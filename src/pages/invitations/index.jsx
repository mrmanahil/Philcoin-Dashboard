import SideBar from "layouts/sidebar";
import TopBar from "layouts/topbar";
import React, { useContext, useEffect } from "react";
import dotsIcon from "assets/assets/dots-icon.svg";
import checkk from "assets/assets/checkk.png";
import u1 from "assets/assets/u1.png";
import close from "assets/assets/close.png";
import TableHeader from "@core/components/apps/invitations/components/TableHeader";
import Modal from "@core/components/apps/invitations/components/Modal";
import useToggleDrawer from "@core/hooks/useToggleDrawer";
import { useInvitation } from "@core/hooks/apps/useInvitation";
import { SidebarContext } from "@core/context/SidebarContext";

const Page = () => {
  const { isDrawerOpen: isSidebarDrawerOpen } = useContext(SidebarContext);
  const { serviceId, isDrawerOpen, handleDrawer } = useToggleDrawer();
  const { store, getAllInvitations } = useInvitation();

  useEffect(() => {
    getAllInvitations();
  }, []);

  return (
    <>
      <main>
        <section className="main-dashboard-sec">
          {/* <!-- sidebar  --> */}
          <SideBar />
          <section
            className={`dashboard-main-sec ${
              !isSidebarDrawerOpen ? `main-dashboard-secbig` : ""
            }`}
          >
            <TopBar />

            <div className="inner-main">
              <div className="usm-sec-main gradient-border border-radius-12 invitation-sec">
                <TableHeader
                  value={""}
                  handleFilter={() => {}}
                  toggle={() => handleDrawer(null)}
                />
                <div className="ums-table-main">
                  <table class="table ums-table" id="ums-table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>

                        {/* <th scope="col">Rights</th> */}
                        <th scope="col">Signed up</th>
                      </tr>
                    </thead>
                    <tbody>
                      {store?.entities?.map((item) => {
                        const { name, email, _id, status } = item;
                        return (
                          <tr key={_id}>
                            <td>
                              <div className="user-info">
                                <div className="img-box">
                                  <img src={u1} alt="" />
                                </div>
                                <p>{name}</p>
                              </div>
                            </td>
                            <td>
                              <p class="user-email">{email}</p>
                            </td>
                            <td>
                              <div className="status-btns">
                                {status ? (
                                  <button className="btn-edit">
                                    <img src={checkk} alt="" />
                                  </button>
                                ) : (
                                  <button className="btn-del">
                                    <img src={close} alt="" />
                                  </button>
                                )}
                                <button>
                                  <img src={dotsIcon} alt="" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {/* <tr>
                        <td>
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u2.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u3.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u4.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u5.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u6.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u7.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
                          <div className="user-info">
                            <div className="img-box">
                              <img src="./assets/u8.png" alt="" />
                            </div>
                            <p>Milan Joseph</p>
                          </div>
                        </td>
                        <td>
                          <p class="user-email">Johan@gmail.com</p>
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
                              <img src="./assets/checkk.png" alt="" />
                            </button>
                            <button className="btn-del">
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
          <div className="modal-dialog  modal-dialog-centered modal-box">
            <div className="modal-content">
              <div className="row">
                <div className="col-12">
                  <div className="modal-header-text">
                    <h2 className="modal-title">Invite Friends</h2>
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

              <div className="modal-body">
                <div className="adduser-form">
                  <form action="" class="signup-form user-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
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
                      <div className="col-12">
                        <div className="form-group">
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
                      <div className="col-12">
                        <div className="btn-box text-center">
                          <button className="add-userBtn">Invite</button>
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
          <div className="modal-dialog  modal-dialog-centered modal-box">
            <div className="modal-content">
              <div className="row">
                <div className="col-12">
                  <div className="modal-header-text">
                    <h2 className="modal-title">Invite Friends</h2>
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

              <div className="modal-body">
                <div className="adduser-form">
                  <form action="" class="signup-form user-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
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
                      <div className="col-12">
                        <div className="form-group">
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
                      <div className="col-12">
                        <div className="btn-box text-center">
                          <button className="add-userBtn">Invite</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
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
