import React from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import './LandingPage.css'
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import Tasks from "./Tasks";
import Footer from "./Footer";
import picture from "C:/Users/ADMIN/React Project/landing_page/src/landingPage/assets/eastwood-23.png"


const navStyle = {
    display: "flex",
    justifyContent: "center"
}

const imageFormatter ={
    marginTop: '5rem',
    marginLeft: '5rem',
    width: '22rem',
    height: '25rem',
}

const titleStyler = {
    fontSize: '300%',
    // color: '#34735C',
    marginLeft: '20rem',
    color: '#2C2C96'
}
const indieStyling = {
    marginTop:"5rem",
    marginRight:"2rem",
}
const textStyler ={
    fontSize:'120%',
    marginLeft: '20rem',
    marginRight:"2rem",
    color: '#f2f2f2'

}

const Container = () =>{
    return (
        <body className="container">
            <div className = "Header">
                <Logo text="Logo"/>
                <Navbar firstTag="Work" secondTag="Team" thirdTag = "About Us" fourthTag = "Contact us" NavbarStyle={navStyle}/>
            </div>

            <div className = 'banner'>
                    <Image link={picture} attr='first-image' imageStyle={imageFormatter}/>
                <div className ="banner-text">
                    <Title title = "How to build a website" titleStyle={titleStyler}/>
                    <Description text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." textStyle={textStyler}/>
                </div>
            </div>

            <div className= 'tasks'>
                <Tasks subHeading = "What we do" copyText = "Indigenous peoples in present-day Canada include the First Nations, Inuit, and Métis, the last being of mixed-descent who originated in the mid-17th century when First Nations people married European settlers and subsequently developed their own identity." styleName={indieStyling}/>
                <Tasks subHeading = "What we do" copyText = "Indigenous peoples in present-day Canada include the First Nations, Inuit, and Métis, the last being of mixed-descent who originated in the mid-17th century when First Nations people married European settlers and subsequently developed their own identity." styleName={indieStyling}/>
                <Tasks subHeading = "What we do" copyText = "Indigenous peoples in present-day Canada include the First Nations, Inuit, and Métis, the last being of mixed-descent who originated in the mid-17th century when First Nations people married European settlers and subsequently developed their own identity." styleName={indieStyling}/>
            </div>
            <div className= "Footer">
                <Footer header = "Contact us" subText1 ="Contact Team" subText2 ="contact me"/>
                <Footer header = "Contact us" subText1 ="Contact Team" subText2 ="contact me" subText3="contact pastor"/>
                <Footer header = "Contact us" subText1 ="Contact Team" subText2 ="contact me" subText3="contact pastor"/>
                <Footer header = "Contact us" subText1 ="Contact Team" subText2 ="contact me" subText3="contact pastor" subText4="Contact your village"/>
            </div>
        </body>
    )
}

export default Container