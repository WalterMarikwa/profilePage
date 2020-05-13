import React from "react";

function Contact() {
  return (
    <form
      action="https://formspree.io/waltermarikwa02@gmail.com"
      method="post"
      id="contact"
      className="contact-form"
    >
      <h1>Contact Me</h1>
      <div className="txtb">
        <label>Full name :</label>
        <input type="text" name="name" placeholder="Enter Your Name" required />
      </div>

      <div className="txtb">
        <label>Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="txtb">
        <label>Phone :</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter Your Phone Number"
          required
        />
      </div>

      <div className="txtb">
        <label>Message :</label>
        <textarea
          placeholder="Type your message here...."
          name="subject"
          required
        ></textarea>
      </div>
      <div className="btn-out">
        <button
          className="btn_contact"
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
          value="Send Message"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
