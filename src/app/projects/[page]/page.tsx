import Pagination from "../../../components/pagination/Pagination";
import ProjectCard from "../../../components/projectCard/ProjectCard";
import { getProjects } from "../../../utli/getDataFunction";
import { dataType } from "../../../utli/types";
export default async function Page({ params }: { params: { page: string } }) {
  const projects = await getProjects(params.page);
  return (
    <div className="projectContainer">
      {projects?.map((ele: dataType) => (
        <ProjectCard data={ele} key={ele.id} />
      ))}
      <Pagination />
    </div>
  );
}
