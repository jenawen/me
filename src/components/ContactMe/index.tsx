/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";
import discord from "../../assets/discord.svg";
import { ToolTip } from "../ToolTip";

const ContactMe = (props: any) => {
  const { pageType } = props;
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
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
        console.warn(err);
      });
  };

  return (
    <div className="cm-parent">
      <div>
        {" "}
        <div className="cm-title">Contact Me</div>
        <div style={{ textAlign: "center", padding: "0px 25px" }}>
          <p>
            If you have any questions, or just want to chat, contact me here.
          </p>
          <p>I'll get back to you as soon as I can!</p>
        </div>
        {pageType === "desktop" ? (
          <div className="cm-links">
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jena-adkins/",
                  "_blank"
                )
              }
              className="cm-l"
              src={linkedin}
            />
            <img
              onClick={() =>
                window.open("https://github.com/jenawen", "_blank")
              }
              className="cm-l"
              src={github}
            />
            <img
              onClick={() =>
                window.open("https://gitlab.com/jenaadkins", "_blank")
              }
              className="cm-l"
              src={gitlab}
            />

            <ToolTip displayText={"jenawen#0"} position={"top"}>
              <img className="cm-l" src={discord} />
            </ToolTip>
          </div>
        ) : null}
        <div className="cm-form">
          <form action={form_ep} onSubmit={handleSubmit} method="POST">
            <span>Name</span>
            <input type="text" placeholder="Your name" name="name" required />

            <span>Email</span>
            <input type="email" placeholder="Email" name="email" />

            <span>Message</span>
            <textarea placeholder="Your message" name="message" required />
            <div style={{ textAlign: "center" }}>
              <button type="submit">Send</button>{" "}
            </div>
          </form>
        </div>{" "}
      </div>
      <div style={{ fontSize: "medium", paddingBottom: "15px" }}>
        {" "}
        Designed and developed with love by Jena Adkins. 2023.
      </div>
    </div>
  );
};

export default ContactMe;
