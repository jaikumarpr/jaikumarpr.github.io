import styled from "styled-components"

const Img = styled.img`
width : 100%;
max-width: 250px;
height: auto;
border-radius: 50%;
`

function ProfilePic(){
    return(
          <Img src="pic.JPG" alt="profile picture of jaikumar pettikkattil"></Img>
    )
}

export default ProfilePic