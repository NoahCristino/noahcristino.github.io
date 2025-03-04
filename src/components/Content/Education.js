import React from "react";

const Education = ({ education }) => {
  return (
    <div class="education">
      <img src={education.image}></img>
      <div>
        <h2 class="education-title">{education.school}</h2>
        <div class="education-major">
          {education.major}
          {"\n"}
          {education.specialization}
        </div>
      </div>
    </div>
  );
};

export default Education;
