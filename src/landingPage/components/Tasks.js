import React from 'react';


const Tasks = (props) =>{
    return(
        <div style={props.styleName}>
            <h2>{props.subHeading}</h2>
            <p>{props.copyText}</p>
        </div>
    )
}

export default Tasks