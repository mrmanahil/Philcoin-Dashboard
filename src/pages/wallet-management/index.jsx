import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <div className="launching-page">
        <header className="site-logo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <img src="assets/logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="mobile-view">
          <section className="launching">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Coming Soon</h1>
                  <div className="launch-time">
                    <div className="days">
                      <div className="launch-d">
                        <h2>15</h2>
                      </div>
                      <h5>days</h5>
                    </div>
                    <div className="hours">
                      <div className="launch-d">
                        <h2>10</h2>
                      </div>
                      <h5>hours</h5>
                    </div>
                    <div className="minutes">
                      <div className="launch-d">
                        <h2>52</h2>
                      </div>
                      <h5>minutes</h5>
                    </div>
                    <div className="seconds">
                      <div className="launch-d">
                        <h2>30</h2>
                      </div>

                      <h5>seconds</h5>
                    </div>
                  </div>

                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <div className="btn-back">
                      <a href="">Back to Home</a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="subs-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subs-desc">
                    <p>
                      Our website is opening soon.
                      <br /> Please register to notify you when it’s ready!
                    </p>
                  </div>
                  <div className="s-form">
                    <form action="">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter your email"
                      />
                      <button className="btn nput-group-btn" type="submit">
                        Notify Me
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </section>
      </div>
    </>
  );
};

export default Page;
