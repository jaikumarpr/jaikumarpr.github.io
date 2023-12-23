import Thumbnail from "./Thumbnail";
import Icon from "./Icon";
const name = "Jaikumar Pettikkattil";

function Introduction() {
  return (
    <div className="intro-container">
      <Thumbnail></Thumbnail>
      <div className="name-container">
        <header className="name-header">{name}</header>
        <div className="mg-t-10">
            <div className="display-inline ft-size-b "> Software Engineer</div>
        </div>
        <div className="icon-container">
            <Icon link="https://github.com/jaikumarpr" imgsrc="icons8-github-48.png" className="icon" ></Icon>
            <Icon link="https://www.linkedin.com/in/jaikumarpettikkattil/" imgsrc="linkedin.png" className="icon" ></Icon>
            <Icon link="https://twitter.com/jaikpet" imgsrc="twitter.png" className="icon-twitter" ></Icon>
            {/* <img src="hf-logo.png" alt="" className="icon-hg"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
