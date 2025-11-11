import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import frame from "./frame.png";
import image from "./image.png";
import maskGroup from "./mask-group.png";
import newUserSignUp from "./new-user-sign-up.svg";
import "./style.css";

export const Signin = () => {
  return (
    <div className="signin">
      <div className="div">
        <img className="frame" alt="Frame" src={frame} />

        <div className="overlap">
          <div className="view-wrapper">
            <div className="view">
              <div className="frame-2">
                <img className="mask-group" alt="Mask group" src={maskGroup} />

                <div className="text-wrapper">SmartRecipe</div>
              </div>
            </div>
          </div>

          <img className="img" alt="Frame" src={image} />

          <div className="view-2">
            <div className="frame-3">
              <div className="text-wrapper-2">Sign in</div>

              <img
                className="new-user-sign-up"
                alt="New user sign up"
                src={newUserSignUp}
              />
            </div>

            <div className="inputs">
              <div className="input-icon-right">
                <div className="title">Enter your email</div>

                <div className="input">
                  <TextField />
                </div>
              </div>

              <div className="input-icon-right">
                <div className="title">Enter your password</div>

                <div className="input">
                  <div className="frame-4">
                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />

                    <div className="frame-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-wrapper-3">Forgot password?</div>

            <div className="overlap-group">
              <div className="text-wrapper-4">Log in</div>

              <Button variant="text">Sign in</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};