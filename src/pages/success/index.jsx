import React from "react";
import checkIcon from "assets/assets/check-icon.svg";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <main>
        <section className="signup-page success-page">
          <div className="signup-box success-box">
            <img src={checkIcon} alt="" />
            <h1>Success !</h1>
            <p>
              A email has been send to your email@domain.com. Please check for
              an email from company and click on the included link to reset your
              password.
            </p>
            <Link to="/login">
              <a href="" class="back-btn">
                Back to home
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
