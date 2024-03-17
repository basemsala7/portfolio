import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { dataType } from "../../utli/types";
import "./projectCard.css";
const ProjectCard = ({ data }: { data: dataType }) => {
  console.log(data, "ele from cart ");
  return (
    <div className="projectCardWraper" key={data?.id}>
      <Image src={data?.img} alt="lan icon" width={50} height={50} />
      <h3>{data?.title}</h3>
      <p>{data?.description}</p>
      <div>
        <a href={data?.link}>
          <IoIosLink /> <span>View Project</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
