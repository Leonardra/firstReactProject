import React from 'react';


const Footer = (props) =>{
    return (
        <div className="footer">
            <h2>{props.header}</h2>
            <p>{props.subText1}</p>
            <p>{props.subText2}</p>
            <p>{props.subText3}</p>
            <p>{props.subText4}</p>
        </div>
    )
}

export default Footer