import React from "react";
import Gmail from "../../assets/assets/Gmail.png";
import Facebook from "../../assets/assets/Facebook.png";
import Instagram from "../../assets/assets/Instagram.png";
import Linkedin from "../../assets/assets/Linkedin.png";
import { Link } from "react-router-dom";
import Input from "@core/components/form/InputField";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm();

  const onSubmit = (body) => {
    console.log(body);
  };

  return (
    <>
      <main>
        <section class="signup-page">
          <div class="signup-box">
            <h1>Sign Up</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form
              action=""
              class="signup-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="fname" class="form-label">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      label="firstName"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="fname"
                      className="form-control"
                      errors={errors?.firstName?.type}
                    />
                    {/* <input
                      type="text"
                      class="form-control"
                      id="fname"
                      name="fname"
                    /> */}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="lname" class="form-label">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      label="lastName"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="lname"
                      className="form-control"
                      errors={errors?.lastName?.type}
                    />
                    {/* <input
                      type="text"
                      class="form-control"
                      id="lname"
                      name="lname"
                    /> */}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      label="email"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="email"
                      className="form-control"
                      errors={errors?.email?.type}
                    />
                    {/* <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                    /> */}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="phone" class="form-label">
                      Phone No.
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter Number"
                      label="phone"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="phone"
                      className="form-control"
                      errors={errors?.phone?.type}
                    />
                    {/* <input
                      type="number"
                      class="form-control"
                      id="phone"
                      name="phone"
                    /> */}
                  </div>
                </div>
                <div class="col-sm-6">
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
                    {/* <input
                      type="password"
                      class="form-control"
                      id="Password"
                      name="Password"
                    /> */}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="cpassword" class="form-label">
                      Confirm password
                    </label>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      label="confirm_password"
                      register={register}
                      formState={formState}
                      maxLength={25}
                      id="cpassword"
                      className="form-control"
                      errors={errors?.confirm_password?.type}
                    />
                    {/* <input
                      type="password"
                      class="form-control"
                      id="cpassword"
                      name="cpassword"
                    /> */}
                  </div>
                </div>
              </div>
              <div class="agree">
                {/* <Input
                  type="checkbox"
                  label="agree"
                  register={register}
                  formState={formState}
                  maxLength={25}
                  id="checkbox"
                  className="form-control"
                  // errors={errors?.agree?.type}
                /> */}
                <input type="checkbox" id="checkbox" {...register("agree")} />
                <label for="checkbox">I agree with the terms of use</label>
              </div>
              <button className="btn-reset" type="submit">
                Submit
              </button>
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
