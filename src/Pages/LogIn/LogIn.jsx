import React, { useEffect, useRef, useState } from "react";
import signImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
export default function LogIn() {
  const captcharef = useRef(null);
  const [disabled , setDisabled]=useState(true)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const hadleVelidateCaptcha = () => {
    const user_captcha_value = captcharef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false)
    } else {
      alert("Captcha Does Not Match");
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={signImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                {/* Captcha */}
                <div className="mt-4">
                  <LoadCanvasTemplate />
                  <input
                    ref={captcharef}
                    type="text"
                    name="captcha"
                    className="input mt-2"
                    placeholder="Enter captcha"
                    required
                  />
                  <button
                    onClick={hadleVelidateCaptcha}
                    className="btn w-full mt-3 btn-outline btn-xs"
                  >
                    Velidate
                  </button>
                </div>
                <input
               disabled={disabled}
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Log In"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
