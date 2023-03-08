import React from "react";
import Gmail from "../../assets/assets/Gmail.png";
import Facebook from "../../assets/assets/Facebook.png";
import Instagram from "../../assets/assets/Instagram.png";
import Linkedin from "../../assets/assets/Linkedin.png";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <main>
        <section class="signup-page">
          <div class="signup-box">
            <h1>Sign Up</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form action="" class="signup-form">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="fname" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      name="fname"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="lname" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="phone" class="form-label">
                      Phone No.
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="cpassword" class="form-label">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="cpassword"
                      name="cpassword"
                    />
                  </div>
                </div>
              </div>
              <div class="agree">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">I agree with the terms of use</label>
              </div>
            </form>
            <div class="signup-bottom">
              <p class="sb-textone">or sign up with other accounts?</p>
              <div class="loginsocial">
                <a href="#">
                  <img src={Gmail} alt="" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img src={Instagram} alt="" />
                </a>
                <a href="#">
                  <img src={Linkedin} alt="" />
                </a>
              </div>
              <p class="sb-texttwo">
                Already have an Account{" "}
                <Link to="/login">
                  {" "}
                  <a href="#">Sign in</a>{" "}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
