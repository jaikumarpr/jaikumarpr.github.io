function Icon(props){
    return(
        <div>
            <a href={props.link} target="_blank" rel="noreferrer"><img src={props.imgsrc} alt="" style={props.style}></img></a>
        </div>
    )
}

export default Icon;