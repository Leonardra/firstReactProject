import React from 'react';


const Image = (props) =>{
    return(
            <img src={props.link} alt={props.attr} style={props.imageStyle}/>
    )
}

export default Image