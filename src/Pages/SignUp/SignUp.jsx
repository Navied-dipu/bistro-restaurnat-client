import React, { useContext } from "react";
import signImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true,
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data),
      createUser(data.email, data.password)
        .then((res) => {
          const logUser = res.user;
          console.log(logUser);
          Swal.fire({
            title: "Sign Up successfuly",
            icon: "success",
            draggable: true,
          });
        })
        .catch((error) => error.massege);
  };

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(name, email, password);
  //   createUser(email, password)
  //     .then((res) => {
  //       console.log(res.user);
  //     })
  //     .catch((error) => {
  //       error.message;
  //     });
  // };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mt-20 ">
          <div className="text-center lg:text-left">
            <img src={signImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    Password must be 6 charecter
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-600">
                    Password below 20 charecter
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600">
                    Minimum eight characters, at least one uppercase letter, one
                    lowercase letter, one number and one special characte
                  </p>
                )}
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>
              <p>
                Already have account{" "}
                <Link className="text-xl text-green-600" to={"/login"}>
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
