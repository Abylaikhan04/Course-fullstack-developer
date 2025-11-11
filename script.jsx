import { Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import frame from "../assets/frame.png";
import image from "../assets/image.png";
import maskGroup from "../assets/mask-group.png";
import newUserSignUp from "../assets/new-user-sign-up.svg";
import "../styles/Signin.css";

export const Signin = () => {
  const [email, setEmail] = useState("erkinred@gmail.com");
  const [password, setPassword] = useState("password");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <main className="signin">
      <section className="signin-container">
        <img className="signin-frame" src={frame} alt="Chef cooking" />

        <div className="signin-content">
          <header className="signin-header">
            <div className="signin-logo">
              <img
                src={maskGroup}
                alt="SmartRecipe logo"
                className="signin-logo-img"
              />
              <h1 className="signin-title">SmartRecipe</h1>
            </div>
          </header>

          <img
            className="signin-side-img"
            src={image}
            alt="Chef holding bowl"
          />

          <section
            className="signin-form-wrapper"
            aria-labelledby="signin-heading"
          >
            <div className="signin-form-header">
              <Typography
                variant="h5"
                component="h2"
                id="signin-heading"
                className="signin-form-title"
              >
                Sign in
              </Typography>
              <img
                src={newUserSignUp}
                alt="New user sign up"
                className="signin-signup-img"
              />
            </div>

            <form className="signin-form" noValidate>
              <div className="signin-input-group">
                <label htmlFor="email" className="signin-label">
                  Enter your email
                </label>
                <TextField
                  id="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  size="small"
                  className="signin-textfield"
                />
              </div>

              <div className="signin-input-group">
                <label htmlFor="password" className="signin-label">
                  Enter your password
                </label>
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={handlePasswordChange}
                  size="small"
                  className="signin-textfield"
                />
              </div>

              <div className="signin-forgot-password">
                <Link href="#" underline="none" className="signin-forgot-link">
                  Forgot password?
                </Link>
              </div>

              <div className="signin-button-wrapper">
                <Button
                  variant="contained"
                  fullWidth
                  className="signin-button"
                  disableElevation
                >
                  Sign in
                </Button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};