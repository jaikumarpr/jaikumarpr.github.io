function Icon(props){
    return(
        <div>
            <a href={props.link} target="_blank" rel="noreferrer"><img src={props.imgsrc} alt="" className={props.className}></img></a>
        </div>
    )
}

export default Icon;