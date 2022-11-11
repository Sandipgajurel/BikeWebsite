import React from "react";
import "../../Styles/HomepageStyle/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="grid1">
        <div className="map">
          <img
            className="mapImg"
            src="https://i.pinimg.com/736x/3b/b5/6a/3bb56a7c0dd880b6ef228c673624304e.jpg"
            alt=""
          ></img>
        </div>

        <div className="item-container">
          <div className="items">
            <p className="head">Products</p>
            <p>N 250</p>
            <p>Ns 200</p>
            <p>Pulser 150</p>
            <p>Pulsar 220</p>
            <p>Dominar</p>
          </div>
          <div className="items">
            <p className="head">Resources</p>
            <p>Help</p>
            <p>Training Videos</p>
            <p>Prices</p>
            <p>Request a Booking</p>
            <p>Show Shwroom map</p>
          </div>
          <div className="items">
            <p className="head">Company</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Contact Us</p>
            <p>Branches</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "85%",
        }}
      />

      <div className="grid2">
        <div className="column">
          <p>Copyright ©Sandip Gajurel All rights reserved.</p>
        </div>
        <div className="column">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt=""
          />
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt=""
          />
           <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            alt=""
          />


        </div>

        <div className="column">
          Privacy Policy | Data & Security | Terms of Service
        </div>
      </div>
    </div>
  );
};

export default Footer;