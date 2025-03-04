import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ href, icon }) => {
  return (
    <div class="social-link" onClick={() => window.open(href, "_blank")}>
      <FontAwesomeIcon icon={icon} size="2x" color="white" />
    </div>
  );
};

export default SocialLink;
