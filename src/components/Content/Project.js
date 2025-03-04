import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Pill from "./Pill";

const Project = ({ project, delay }) => {
  return (
    <div className="project" style={{ animationDuration: `${delay}s` }}>
      <div className="project-image-container">
        <img src={project.image} />
      </div>
      <div className="project-content">
        <div class="project-header">
          <h2>{project.name}</h2>
          <FontAwesomeIcon
            className="project-icon"
            icon={faArrowUpRightFromSquare}
            size="1x"
          />
        </div>
        <p class="project-description">{project.description}</p>
        <div class="project-stack">
          {project.stack.map((stackItem) => (
            <Pill text={stackItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
