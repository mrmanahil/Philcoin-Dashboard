import React from "react";
import Gmail from "assets/assets/Gmail.png";
import Facebook from "assets/assets/Facebook.png";
import Instagram from "assets/assets/Instagram.png";
import Linkedin from "assets/assets/Linkedin.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "@core/components/form/InputField";
import { useForm } from "react-hook-form";
import { useAuth } from "hooks/useAuth";
import { toast } from "react-hot-toast";

const Page = () => {
  const {
    register,
    formState: { errors },
    formState,
    handleSubmit,
    setError,
  } = useForm();

  const auth = useAuth();

  const navigate = useNavigate();

  const onSubmit = (body) => {
    const { email, password } = body;
    auth.login(
      { email, password },
      (error) => {
        setError("password", {
          type: "manual",
          message: error?.message || "Invalid credentials!",
        });
        toast.error(error?.message || "Invalid credentials!");
      },
      navigate
    );
  };

  return (
    <>
      <main>
        <section className="signup-page signin">
          <div className="signup-box signin-box">
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form
              action=""
              class="signup-form signin-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Search By Email"
                      label="email"
                      register={register}
                      formState={formState}
                      maxLength={50}
                      id="email"
                      className="form-control"
                      errors={errors?.email?.type}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
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
              <div className="forgottPass">
                <div className="agree">
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
            <div className="signup-bottom">
              <p class="sb-textone">or sign in with other accounts?</p>
              <div className="loginsocial">
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
                Don’t have an account?{" "}
                <Link to={"/sign-up"}>
                  <a href="">Click here to sign up.</a>
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
