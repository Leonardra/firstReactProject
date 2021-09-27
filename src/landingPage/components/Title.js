import React from 'react';


const Title = (props) =>{
    return (
        <h2 className={'banner-title'} style={props.titleStyle}>{props.title}</h2>
    )
}

export default Title