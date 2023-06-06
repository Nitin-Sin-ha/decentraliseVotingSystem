import React from "react";
import web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { useState, useEffect } from "react";
import Home from "../Home/Home";

import { Link, useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  return (
    <>
      <video autoPlay loop muted id="myVideo">
        <source src="/Videos/code3.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div class="content">
        <button className="button">
          <span>Connect Metamask</span>
        </button>
      </div>
    </>
  );
}
export default Login;
