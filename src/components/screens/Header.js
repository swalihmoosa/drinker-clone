import React from 'react'
import styled from 'styled-components'
import wine from "../images/box_img.png"
import icon from "../images/menu_icon.png"
import deleteicon from "../images/minus-circle-solid.svg"

export default function Header() {
    return (
        <>
            <section id="home">
                <Section className="wrapper bg">
                    <Head>
                        <H1>
                            <a href="#" >
                            Drinker
                            </a>
                        </H1>
                        <Ul>
                            <Li>
                                <a href="#" >
                                About
                                </a>
                            </Li>
                            <Li>
                                <a href="#" >
                                Contact Us
                                </a>
                            </Li>
                        </Ul>
                        <Icondiv id="icondiv" onClick={active}>
                            <img src={icon} alt="Icon" />
                        </Icondiv>
                        <Iconul id="iconul">
                            <Iconli>
                                <a href="#" >
                                About
                                </a>
                            </Iconli>
                            <Iconli>
                                <a href="#" >
                                Contact Us
                                </a>
                            </Iconli>
                        </Iconul>
                        <Delete id="delete" onClick={inactive}>
                            <img src={deleteicon} alt="Delete icn" />
                        </Delete>
                    </Head>
                    <Spot>
                        <Wine>
                            <img src={wine} alt="box_img" />
                        </Wine>
                        <H3>
                            Spent the best time with best wine
                        </H3>
                        <Button>
                            Read More
                        </Button>
                    </Spot>
                </Section>
            </section>
            
        </>
    )
}
const Section = styled.section`
`
const Head = styled.header`
    display:flex;
    justify-content:space-between;
    padding:25px 0;
    align-items:center;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }
`
const H1 = styled.h1`
    font-size:40px;
    font-weight:700;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }
`
const Ul = styled.ul`
    display:flex;
    justify-content:space-between;
    width:14%;
    @media all and (max-width: 1280px){
        width: 18%;
    }
    @media all and (max-width: 980px){
        width: 22%;
    }
    @media all and (max-width: 768px){
        width: 26%;
    }
    @media all and (max-width: 640px){
        display:none;
    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }
`
const Li = styled.li`
    color:red;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }`
const Spot = styled.section`
    padding:30px 0;
    border-bottom:2px solid #696969;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }`
const Wine = styled.div`
    width:75%;
    margin:0 auto;
    margin-bottom:25px;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){

    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }`
const H3 = styled.h3`
    text-align:center;
    font-size:40px;
    margin-bottom:25px;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){

    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
        font-size: 35px;
    }
    @media all and (max-width: 360px){
        font-size: 28px;
    }
    @media all and (max-width: 320px){

    }
`
const Button = styled.a`
    display:block;
    background:#696969;
    border:2px solid #696969;
    color:#fff;
    width:20%;
    margin:0 auto;
    text-align:center;
    padding:15px 25px;
    font-weight:700;
    &:hover{
        cursor:pointer;
        background:#fff;
        color:#696969;
    }
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 35%;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
        width: 50%;
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){
        width: 90%;
    }
    `
const Icondiv = styled.div`
    width: 35px;
    display:none;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        display:block;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){
    }
    `
const Iconul = styled.ul`
    position: fixed;
    right: -333px;
    bottom: 280px;
    background: #2d2d2d;
    z-index: 2;
    transition: all 0.4s ease-in;
    display:none;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        display:block;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){
        width: 145px;
        padding: 50px 0px;
    }`
const Iconli = styled.li`
    margin-bottom: 25px;
    width:100%;
    text-align:center;
    &:last-child{
        margin-bottom:0;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){
    }`
const Delete = styled.div`
    width: 35px;
    position:absolute;
    right: 32px;
    display:none;
@media all and (max-width: 1280px){
}
@media all and (max-width: 980px){

}
@media all and (max-width: 768px){
}
@media all and (max-width: 640px){

}
@media all and (max-width: 480px){
}
@media all and (max-width: 360px){

}
@media all and (max-width: 320px){
}
    `

function active() {
    var home = document.getElementById("home");
    var icon = document.getElementById("icondiv")
    var delicon = document.getElementById("delete")
    var ul = document.getElementById("iconul")

    icon.addEventListener('click', () =>{
        home.classList.add("open");
    });
    icon.addEventListener('click', () =>{
        icon.classList.add("open");
    });
    icon.addEventListener('click', () =>{
        delicon.classList.add("deleteopen");
    });
    icon.addEventListener('click', () =>{
        ul.classList.add("open");
    });
    icon.addEventListener('click', () =>{
        home.classList.remove("close");
    });
}
function inactive() {
    var home = document.getElementById("home");
    var icon = document.getElementById("icondiv")
    var delicon = document.getElementById("delete")
    var ul = document.getElementById("iconul")

    delicon.addEventListener('click', () =>{
        home.classList.add("close");
    });
    delicon.addEventListener('click', () =>{
        icon.classList.remove("open");
    });
    delicon.addEventListener('click', () =>{
        delicon.classList.remove("deleteopen");
    });
    delicon.addEventListener('click', () =>{
        ul.classList.remove("open");
    });
}