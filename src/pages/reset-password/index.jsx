import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <main>
        <section class="signup-page reset-pass">
          <div class="signup-box reset-box">
            <h1>Reset Password</h1>
            <p>
              Enter your email address and we’ll send you an email with
              instructions to reset your password
            </p>
            <form action="" class="signup-form reset-form">
              <div class="row">
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
              </div>
              <Link to="/lock-screen">
                <button class="btn-reset">Reset</button>
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
