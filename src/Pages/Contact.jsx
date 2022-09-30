import React from "react";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
const Contact = () => {
  return (
    <div>
      <TopBar />
      <div className="mb-4"></div>
      <div className="container m-auto text-center">
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://c0.wallpaperflare.com/preview/982/836/887/advice-assistance-call-call-now.jpg"
          alt="icon"
        />
        <h1 style={{ color: "#2486d5" }}>Contact Us</h1>
        <p className="m-auto pb-5" style={{ maxWidth: "400px" }}>
          Sit back & relax because we got this! With a base of 1200+ equipment
          and 300+ suppliers, we leave no stone unturned to serve you at best.
        </p>
        <p className=" pb-5">
          <h2 style={{ color: "#2486d5" }}>Phone</h2>
          <br />
          <span className="DetailPhone ">+9140 6901 1600</span>
        </p>
        <p>
          <h2 style={{ color: "#2486d5" }}>Email</h2>
          <br />
          <span className="DetailEmail ">info@equiphunt.com</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

// #2486d5
