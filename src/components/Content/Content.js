import React from "react";
import {
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { projects, jobs, education, resume } from "../../data";
import Project from "./Project";
import Job from "./Job";
import MoreLink from "./MoreLink";
import Education from "./Education";

const Content = () => {
  return (
    <div className="right-column">
      {projects.map((project, index) => (
        <Project project={project} delay={(index + 1) * 0.5} />
      ))}
      <MoreLink text="View More Projects" icon={faArrowUpRightFromSquare} />
      {jobs.map((job, index) => (
        <Job job={job} delay={(index + 1) * 0.5} />
      ))}
      <MoreLink text="View Full Resume" icon={faDownload} link={resume} />
      <Education education={education} />
    </div>
  );
};

export default Content;
