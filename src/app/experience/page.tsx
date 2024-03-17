"use client";
import { useRef } from "react";
import Header from "../../components/header/Header";
import Pdf from "../../components/pdf/Pdf";
import "./experience.css";
export default function Experience() {
  const iti = useRef<HTMLDivElement>(null);
  const hackthon = useRef<HTMLDivElement>(null);
  const intern = useRef<HTMLDivElement>(null);
  const openClose = (target: string) => {
    console.log("first");
    if (target == "iti") {
      if (iti.current) {
        iti.current.classList.toggle("hidden");
      }
    } else if (target == "hackthon") {
      if (hackthon.current) {
        hackthon.current.classList.toggle("hidden");
      }
    } else {
      if (intern.current) {
        intern.current.classList.toggle("hidden");
      }
    }
  };
  return (
    <div className="container">
      <Header />
      <div className="experienceWraper">
        <h2>Crafting Seamless User Experiences Frontend Development Journey</h2>
        <Pdf />
      </div>
      <div className="experoences">
        <div className="experoencesCard">
          <p>4 june 2023</p>
          <div>
            <button
              type="button"
              className="collapsible"
              onClick={() => openClose("intern")}
            >
              Frontend internship at ODC
            </button>
            <div className="content hidden" ref={intern}>
              <p>
                I trained at Orange Digital Center for a period of 3 months as a
                frontend developer. During this time, I interacted with
                individuals with high expertise in the field of software
                engineering. Together, we worked on several projects from which
                I gained valuable insights. I also benefited from understanding
                the functioning of organizations and teamwork.
              </p>
            </div>
          </div>
        </div>
        <div className="experoencesCard">
          <p>13 july 2022</p>
          <div>
            <button
              type="button"
              className="collapsible"
              onClick={() => openClose("iti")}
            >
              ITI Summer Training
            </button>
            <div className="content hidden" ref={iti} id="iti">
              <p>
                i have attended the course entitled advanced web development
                using React js (120h) clientside technologies Respomsive Design
                css preprocessoe ECMA 6 and React
              </p>
            </div>
          </div>
        </div>
        <div className="experoencesCard">
          <p>29 April 2023</p>
          <div>
            <button
              type="button"
              className="collapsible"
              onClick={() => openClose("hackthon")}
            >
              Eid Hackthon
            </button>
            <div className="content hidden" ref={hackthon}>
              <p>
                I participated in a hackathon affiliated with Orange Digital
                Center. I was a member of a team consisting of five individuals
                an mobile developer , a backend developer, UI/UX designer and
                tester , and we worked on an E-wallet project Tap cach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
