"use client";
import Header from "../../components/header/Header";
import "./contact.css";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { contactValidation } from "../../utli/validation";
export default function Contact() {
  const [data, setdata] = useState({
    from: "",
    about: "",
    description: "enter your message",
  });
  const [valid, setValid] = useState("");
  const [loading, setloading] = useState(false);
  const [done, setDone] = useState(false);

  const changeHandleing = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setdata({ ...data, [name]: e.target.value });
  };

  const postEmailReq = async () => {
    try {
      setloading(true);
      const res = await fetch(
        "https://vercel-test-256hr9u65-basemsala7s-projects.vercel.app/api/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw Error("faild");
      const date = await res.json();
      setloading(false);
      console.log(data);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
      setdata({ from: "", about: "", description: "" });

      return data;
    } catch (error) {
      setloading(false);
      console.log(error);
    } finally {
      setloading(false);
      setdata({ from: "", about: "", description: "" });
      setValid("");
    }
  };

  const sendMail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("sendmail");
    console.log(valid);
    const { from, about, description } = data;
    if (!from && !about && !description) {
      return setValid("failds are required");
    }
    const { error } = contactValidation(data);
    if (error) {
      return setValid(error.details[0].message.toString());
    } else {
      // Post Req
      postEmailReq();
    }
  };
  return (
    <div className="container">
      <Header />
      <div className="contactContainer">
        {done && (
          <div className="popup">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
          </div>
        )}
        <div className="layer"></div>
        <form>
          <h2>Contact Me !</h2>
          <p>
            Thank you for your interest in getting in touch with me. I welcome
            your feedback, questions, and suggestions. If you have a specific
            question or comment, please feel free to email me directly at
            basembebo809@gmail.com
          </p>
          <input
            type="email"
            placeholder="Your email"
            name="from"
            value={data.from}
            onChange={changeHandleing}
          />
          <input
            type="text"
            name="about"
            placeholder="About ?"
            onChange={changeHandleing}
            value={data.about}
          />
          <textarea
            name="description"
            id="message"
            placeholder="Message"
            onChange={changeHandleing}
            value={data.description}
          >
            enter your message
          </textarea>

          <button onClick={sendMail}>
            Send
            {loading ? <span className="loader"></span> : ""}
          </button>
          {valid && <p id="error">{valid} </p>}
        </form>
        <div className="info">
          <h2>info</h2>
          <div>
            <FaMailBulk />
            <p>basembebo809@gmail.com</p>
          </div>
          <div>
            <FaPhoneAlt />
            <p>01551401878</p>
          </div>
          <div>
            <FaLocationDot /> <p>port said , Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
