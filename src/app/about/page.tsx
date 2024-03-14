import Header from "../../components/header/Header";
import aboutimg from "../../../public/about.jpg";
import Image from "next/image";
import "./about.css";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
export default function About() {
  return (
    <div className="container">
      <Header />

      <div className="aboutContainer">
        <div className="titleWraper">
          <h1>
            I am Basem Salah live in Portsaid Egypt , where I design the future.
          </h1>
          <p>
            I have worked on a variety of projects over the years and I am proud
            of the progress I have made. Many of these projects are open-source
            and available for others to explore and contribute to. If you re
            interested in any of the projects I have worked on, please feel free
            to check out the code and suggest any improvements or enhancements
            you might have in mind. Collaborating with others is a great way to
            learn and grow, and I am always open to new ideas and feedback
          </p>

          <h1>Education </h1>
          <p>
            Student at the Faculty of Computers and Information, Suez Canal
            University, in the final year.
          </p>
        </div>
        <div className="right">
          <Image src={aboutimg} alt={"homePage"} />

          <div>
            <a href="https://github.com/basemsala7" target="_blanck">
              <FaGithub />
              Follow me on Github
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/basem-salah-254894215/"
              target="_blank"
            >
              <FaLinkedin />
              Follow me on Linkedin
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/basem.salah.505960"
              target="_blanck"
            >
              <FaFacebookSquare /> Follow me on Facebook
            </a>
          </div>

          <div>
            <a href="mailto:basembebo809@gmail.com">
              <FaMailBulk />
              basembebo809@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
