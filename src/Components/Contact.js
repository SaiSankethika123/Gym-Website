import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Enter Youe Email" required />
        <textarea placeholder="Write Here..." name="message"></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
