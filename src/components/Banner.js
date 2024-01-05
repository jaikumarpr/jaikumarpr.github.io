import SocialLinks from "./SocialLinks";
import styled from "styled-components"

const name = "Jaikumar Pettikkattil";
const role = "Software Engineer";

const Name = styled.header`
font-size: calc(20px + 2vmin);
`

const Title = styled.header`
font-size: max(calc(5px + 1.7vmin), 18px);
`

const ParentDiv  =styled.div`
margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function Banner() {
  return (
    <ParentDiv>
        <Name>{name}</Name>
        <Title>{role}</Title>
        <SocialLinks></SocialLinks>
    </ParentDiv>
  );
}

export default Banner;
