import React from "react";

import { profile, socialIcons } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="left-column">
      <h1 id="name">{profile.name}</h1>
      <p id="title">{profile.title}</p>
      <img id="me" src={profile.profilePic}></img>
      <p id="bio">{profile.bio}</p>
      <div id="social">
        {socialIcons.map((socialIcon) => (
          <SocialLink {...socialIcon} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
