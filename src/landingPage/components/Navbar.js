import React from 'react'
import './LandingPage.css'


const Navbar = (props) =>{
    return (
        <div className={"navbar-div"} style ={props.navBarStyle}>
           <a>{props.firstTag}</a> <a>{props.secondTag}</a> <a>{props.thirdTag}</a> <a>{props.fourthTag}</a>
        </div>
    )
}

export default Navbar