import { useState } from "react";
import { Button } from "react-bootstrap";
import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import "./css/style.css";
import { Link } from "react-router-dom";
const signin_img = require("./images/signin-image.jpg");
export const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`);
  };

  return (
    <>
      <div class="main">
        <section class="signup">
          <div class="container">
            <section class="sign-in">
              <div class="container">
                <div class="signin-content">
                  <div class="signin-image">
                    <figure>
                      <img src={signin_img} alt="sing up image" />
                    </figure>
                    <Link to="/register">Create an account</Link>
                  </div>

                  <div class="signin-form">
                    <h2 class="form-title">Login</h2>
                    <form method="POST" class="register-form" id="login-form">
                      <div class="form-group">
                        <label for="email">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="your_name"
                          placeholder="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_pass">
                          <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="password"
                          name="your_pass"
                          id="your_pass"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="checkbox"
                          name="remember-me"
                          id="remember-me"
                          class="agree-term"
                        />
                        <label for="remember-me" class="label-agree-term">
                          <span>
                            <span></span>
                          </span>
                          Remember me
                        </label>
                      </div>
                      <div class="form-group form-button">
                        <input
                          type="submit"
                          name="signin"
                          id="signin"
                          class="form-submit"
                          value="Log in"
                        />
                      </div>
                    </form>
                    <div class="social-login">
                      <span class="social-label">Or login with</span>
                      <ul class="socials">
                        <li>
                          <a href="#">
                            <i class="display-flex-center zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="display-flex-center zmdi zmdi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="display-flex-center zmdi zmdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
