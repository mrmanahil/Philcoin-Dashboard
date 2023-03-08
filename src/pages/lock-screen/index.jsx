import React from "react";
import avatar1 from "assets/assets/avatar1.svg";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <main>
        <section class="signup-page lock">
          <div class="signup-box lock-box">
            <img src={avatar1} alt="" />
            <h1>Hi ! Austin Robertson</h1>
            <p>Enter your password to acess the admin.</p>
            <form action="" class="signup-form locks-form">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="Password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      name="Password"
                    />
                  </div>
                </div>
              </div>
              <Link to="/success">
                <button class="btn-login">Login</button>
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
