import React from "react";
import "./mainbody.css";
import "./../../app/globals.css";


function Mainbody() {
  return <div className="mainbody">
    <div className="mainbody-header">
      <p className="light-text">Dashboard</p>
      <form className="nav-form">
        <input type="text" className="search-bar" placeholder="Search" />
      </form>
      <div className="notification"></div>
    </div>
  </div>;
}

export default Mainbody;
