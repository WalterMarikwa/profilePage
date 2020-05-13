import React from "react";
import SecondNav from "./second";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Nav() {
  const logo = {
    color: "orange",
  };
  return (
    <div className="firstNav">
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <h1 style={logo} className="navbar-brand">
            SAMSON MARIKWA
          </h1>
        </Link>
        <form
          action="https://formspree.io/waltermarikwa02@gmail.com"
          method="post"
          id="contact"
          className="contact-form"
          className="form-inline"
        >
          <input
            className="inputForm mr-sm-2"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="inputForm mr-sm-2"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <button
            className="btn_form"
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            value="Send Message"
          >
            Connect
          </button>
        </form>
      </nav>
      <SecondNav />
    </div>
  );
}

export default Nav;
