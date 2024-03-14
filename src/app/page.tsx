import "./home.css";
import { getProjects } from "../utli/getDataFunction";
import { dataType } from "../utli/types";
import Header from "../components/header/Header";
import Pdf from "../components/pdf/Pdf";
import ProjectCard from "../components/projectCard/ProjectCard";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import logo from "../../public/logo.png";
import homePage from "../../public/homepage.jpg";
import odc from "../../public/a1cf19143609197.6488c1adeb298.jpg";
import Image from "next/image";
export default async function Home() {
  const projects = await getProjects("");
  return (
    <>
      <div className="container">
        <Header />
        <div className="aboutContainer">
          <div className="titleWraper">
            <Image src={logo} width={100} height={100} alt="logo" />
            <h1>Frontend web developer By React js and Next js</h1>
            <p>
              I am a frontend developer with expertise in React js and Next js .
              I have experience in building scalable, secure and reliable web
              applications using various frameworks and technologies. I enjoy
              solving complex problems and learning new skills. I am passionate
              about creating high-quality code that follows best practices and
              industry standards. I am always looking for new challenges and
              opportunities to grow as a developer.
            </p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/basem-salah-254894215/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a href="https://github.com/basemsala7" target="_blanck">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/basem.salah.505960"
                target="_blanck"
              >
                <FaFacebookSquare />
              </a>
              <a href="mailto:basembebo809@gmail.com">
                <FaMailBulk />
              </a>
            </div>
          </div>
          <Image src={homePage} alt={"homePage"} />
        </div>
        <h2 style={{ padding: "32px" }}>Some Projects</h2>
        <div className="projectContainer">
          {projects?.map((ele: dataType) => (
            <ProjectCard data={ele} key={ele.id} />
          ))}
        </div>
        <div className="experince">
          <Pdf />

          <div className="work">
            <MdOutlineWorkOutline /> <span>Work </span>
            <div>
              <Image src={odc} alt="odc" width={100} height={80} />
              <div className="worktitle">
                <h4>Orange Digital center</h4>
                <p>frontend developer intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
