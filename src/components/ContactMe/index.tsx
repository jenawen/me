/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";

import { useState } from "react";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form_ep =
    "https://public.herotofu.com/v1/56b70060-178f-11ee-8025-97a9fb2f29da";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(form_ep, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }
        setSubmitted(true);
      })

      .catch((err) => {
        e.target.submit();
        console.warn(err);
      });
  };

  return (
    <div className="cm-parent">
      <div className="top-half">
        <div className="contact-middle">
          <div className="contact-title">Contact Me</div>
          <div className="links-container">
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jena-adkins/",
                  "_blank"
                )
              }
              id="contact-icon"
              src={linkedin}
            />
            <img
              onClick={() =>
                window.open("https://github.com/jenawen", "_blank")
              }
              id="contact-icon"
              src={github}
            />
            <img
              onClick={() =>
                window.open("https://gitlab.com/jenaadkins", "_blank")
              }
              id="contact-icon"
              src={gitlab}
            />
          </div>
          <div className="contact-box">
            <form action={form_ep} onSubmit={handleSubmit} method="POST">
              <span>Name</span>
              <input type="text" placeholder="Your name" name="name" required />

              <span>Email</span>
              <input type="email" placeholder="Your email" name="email" />

              <span>Message</span>
              <textarea placeholder="Your message" name="message" required />

              <div style={{ textAlign: "center" }}>
                <button style={{ fontFamily: "Quicksand" }} type="submit">
                  Send
                </button>
                {submitted ? (
                  <>
                    {" "}
                    <p> Thank you! </p> <p> Your message has been sent :) </p>{" "}
                  </>
                ) : null}
              </div>
            </form>
          </div>

          <div className="c-msg">
            {" "}
            Designed and developed with love by Jena Adkins. 2023.
          </div>
        </div>
      </div>

      <div className="bottom-half"></div>
    </div>
  );
};

export default ContactMe;
