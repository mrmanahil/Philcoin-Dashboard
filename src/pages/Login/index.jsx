import React from "react";
import Gmail from "assets/assets/Gmail.png";
import Facebook from "assets/assets/Facebook.png";
import Instagram from "assets/assets/Instagram.png";
import Linkedin from "assets/assets/Linkedin.png";
import { Link } from "react-router-dom";
import Input from "@core/components/form/InputField";
import { useForm } from "react-hook-form";
import { useAuth } from "hooks/useAuth";

const Page = () => {
  const {
    register,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm();

  const auth = useAuth();

  const onSubmit = (body) => {
    console.log(body);
  };

  return (
    <>
      <main>
        <section class="signup-page signin">
          <div class="signup-box signin-box">
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form
              action=""
              class="signup-form signin-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Search By Email"
                      label="email"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="email"
                      className="form-control"
                      errors={errors?.email?.type}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="Password" class="form-label">
                      Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      label="password"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="Password"
                      className="form-control"
                      errors={errors?.password?.type}
                    />
                  </div>
                </div>
              </div>
              <div class="forgottPass">
                <div class="agree">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox">Remember me?</label>
                </div>
                <Link to="/reset-password">
                  <a href="#">Forgot Password</a>
                </Link>
              </div>
              <button className="btn-reset" type="submit">
                Submit
              </button>
            </form>
            <div class="signup-bottom">
              <p class="sb-textone">or sign in with other accounts?</p>
              <div class="loginsocial">
                <a href="#">
                  {/* <img src="./assets/Gmail.png" alt="" /> */}
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
                Don’t have an account?{" "}
                <Link to={"/sign-up"}>
                  <a href="signup.html">Click here to sign up.</a>
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
