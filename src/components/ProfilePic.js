
const style =  {
    width: "100%",
    "max-width" : "250px",
    height: "auto",
    "border-radius": "50%",
  }

  const parent ={
    "margin-top": "40px",
    display: "flex",
    "justify-content": "center",
  }



function ProfilePic(){
    return(
        <div style={parent}>
             <img src="pic.JPG" alt="" style={style}></img>
        </div> 
    )
}

export default ProfilePic