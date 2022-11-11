import React from "react";
import "../../Styles/HomepageStyle/Navbar.css";
const Navbar = () => {
  return (
    <div className="header-content">
      <div className="first-col">
        <div className="text">features</div>
        <div className="text">Pricing</div>
        <div className="text">Testomonials</div>
        <div className="text">Resources</div>
      </div>

      <div className="second-col">
        <div className="text">
          <img
            style={{
              width: "25px",
              height: "25px",
            }}
            src="https://cdn-icons-png.flaticon.com/512/187/187839.png?w=740&t=st=1665987135~exp=1665987735~hmac=73f45fbeb2e3471cae795995cb536ef98b0c8cb59347a5f823a027c3e79e6b00"
            alt=""
          ></img>
          Circle
        </div>
      </div>

      <div className="third-col">
        <div className="text">Company</div>
        <div className="text">Contact</div>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;