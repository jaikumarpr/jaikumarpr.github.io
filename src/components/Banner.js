import SocialLinks from "./SocialLinks";

const name = "Jaikumar Pettikkattil";
const role = "Software Engineer";

const NameStyle = {
  "font-size" : "calc(20px + 2vmin)"
}

const RoleStyle = {
  "font-size" : "max(calc(5px + 1.7vmin), 18px)"
}

const parent ={
  "margin-top": "40px",
  display: "flex",
  "justify-content": "center",
  "flex-direction": "column",
  "align-items": "center"
}

function Banner() {
  return (
    <div style={parent}>

        <header style={NameStyle}>{name}</header>
        <header style={RoleStyle}>{role}</header>
        <SocialLinks></SocialLinks>

    </div>
  );
}

export default Banner;
