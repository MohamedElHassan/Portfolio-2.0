import React, { useState, useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { name, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: name,
  //     email: email,
  //     message: message,
  //   };
  //   client.create(contact).then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   });
  // };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ezsl09b",
        "template_3iwy4nb",
        form.current,
        "7VpnH1_WBnOvLHrt2"
      )
      .then(
        (result) => {
          setIsFormSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <>
    //   <h2 className="head-text">Take a coffe & chat with me</h2>

    //   <div className="app__footer-cards">
    //     <div className="app__footer-card">
    //       <img src={images.email} alt="email" />
    //       <a href="mailto:mohammedelhassan2001@gmail.com" className="p-text">
    //         mohammedelhassan2001@gmail.com
    //       </a>
    //     </div>
    //     <div className="app__footer-card">
    //       <img src={images.mobile} alt="mobile" />
    //       <a href="tel:+201557817439" className="p-text">
    //         +201557817439
    //       </a>
    //     </div>
    //   </div>
    //   {!isFormSubmitted ? (
    //     <div className="app__footer-form app__flex">
    //       <div className="app__flex">
    //         <input
    //           className="p-text"
    //           type="text"
    //           placeholder="Your Name"
    //           name="name"
    //           value={name}
    //           onChange={handleChangeInput}
    //         />
    //       </div>
    //       <div className="app__flex">
    //         <input
    //           className="p-text"
    //           type="email"
    //           placeholder="Your Email"
    //           name="email"
    //           value={email}
    //           onChange={handleChangeInput}
    //         />
    //       </div>
    //       <div>
    //         <textarea
    //           className="p-text"
    //           placeholder="Your Message"
    //           name="message"
    //           value={message}
    //           onChange={handleChangeInput}
    //         />
    //       </div>
    //       <button type="button" className="p-text" onClick={handleSubmit}>
    //         {loading ? "Sending" : "Send Message"}
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       {" "}
    //       <h3 className="head-text">Thank you for getting in touch!</h3>
    //     </div>
    //   )}
    // </>

    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mabouhashem7@gmail.com" className="p-text">
            mabouhashem7@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a
            href="https://wa.me/201503902001"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            +20 150 390 2001
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          {" "}
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
