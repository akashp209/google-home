import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import MenuIcon from "@material-ui/icons/Menu";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="header_left">
          <MenuIcon />
          <Link className="all" to="/all">
            All
          </Link>
          <Link to="/images">Images</Link>
        </div>
        <div className="header_right">
          {/* <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link> */}
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
