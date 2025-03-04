import React from "react";

import Pill from "./Pill";

const Job = ({ job }) => {
  return (
    <div className="job">
      <div class="job-header">
        <p>
          {job.startDate} -{"\n"}
          {job.endDate}
        </p>
      </div>
      <div>
        <h2 class="job-title">
          {job.title} @ {job.company}
        </h2>
        <div class="job-description">{job.description}</div>
        <div class="job-stack">
          {job.stack.map((stackItem) => (
            <Pill text={stackItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
