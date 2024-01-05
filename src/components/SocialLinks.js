import Icon from "./Icon";
import styled from "styled-components";

const ParentDiv = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
`
const links = {
  github: "https://github.com/jaikumarpr",
  linkedin: "https://www.linkedin.com/in/jaikumarpettikkattil/",
  twitter: "https://twitter.com/jaikpet"
}

function SocialLinks() {
  return (
        <ParentDiv>
          {Object.entries(links).map(([key, val]) => <Icon link={val} icon={key}></Icon>)}
        </ParentDiv>

  );
}

export default SocialLinks;
