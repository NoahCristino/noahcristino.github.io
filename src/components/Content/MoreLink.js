import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoreLink = ({ text, icon, link }) => {
  return (
    <div class="more-link" onClick={() => window.open(link, "_blank")}>
      <h2>{text}</h2>
      <FontAwesomeIcon icon={icon} size="1x" />
    </div>
  );
};

export default MoreLink;
