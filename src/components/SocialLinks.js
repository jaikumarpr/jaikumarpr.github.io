import Icon from "./Icon";

const parent ={
  "margin-top": "20px",
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    "width": "200px",
    "align-self": "center",
}

const icon =  {
    height: "25px",
    width: "25px"
    /* border-radius: 50%; */
  }
  
  const icon_twitter =  {
    height: "23px",
    width: "23px"
    /* border-radius: 50%; */
  }
function SocialLinks() {
  return (
        <div style={parent}>
            <Icon link="https://github.com/jaikumarpr" imgsrc="icons8-github-48.png" style={icon} ></Icon>
            <Icon link="https://www.linkedin.com/in/jaikumarpettikkattil/" imgsrc="linkedin.png" style={icon} ></Icon>
            <Icon link="https://twitter.com/jaikpet" imgsrc="twitter.png" style={icon_twitter} ></Icon>
        </div>

  );
}

export default SocialLinks;
