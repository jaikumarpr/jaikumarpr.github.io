import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const iconLib = {
  github: faGithub,
  linkedin: faLinkedin,
  twitter: faXTwitter,
};

const SocialLink = styled.a`
text-decoration: none;
color: inherit;
`

function Icon({ link, icon }) {
  return (
    <SocialLink href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="fa-lg" icon={iconLib[icon]} />
    </SocialLink>
  );
}

export default Icon;
