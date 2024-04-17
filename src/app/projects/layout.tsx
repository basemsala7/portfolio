import Header from "../../components/header/Header";
import "./projects.css";
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container">
        <Header />

        <div className="projectsPageContainer">
          <h1>Things I have made trying to put my dent in the universe.</h1>
          <p>
            Ive worked on a variety of projects over the years and Im proud of
            the progress I have made. Many of these projects are open-source and
            available for others to explore and contribute to. If youre
            interested in any of the projects Ive worked on please feel free to
            check out the code and suggest any improvements or enhancements you
            might have in mind.
          </p>
          <p id="hint">
            All the project details and demo can be found in README file by
            visiting the GitHub link "View project"
          </p>
        </div>
        {children}
      </div>
    </>
  );
}
