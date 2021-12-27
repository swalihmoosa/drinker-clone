import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <>
            <section id="about">
                <Wrap className="wrapper">
                    <H3>
                    About 
                    <A href="#">
                            Store
                    </A>
                    </H3>
                    <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    </P>
                    <Button>
                        Read More
                    </Button>
                </Wrap>
            </section>
        </>
    )
}
const Wrap = styled.section`
    border-bottom:2px solid #696969;
    padding:50px 0;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 100%;
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
    font-size:40px;
    font-weight:700;
    text-align:center;
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

    }
    `
const A = styled.a`
    color:#fe0131;
    font-size:40px;
    font-weight:700;
    margin-left: 10px;
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
const P = styled.p`
    text-align:center;
    width:90%;
    margin:0 auto 25px;
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
const Button = styled.a`
    display:block;
    padding:15px 25px;
    background:#696969;
    color:#fff;
    font-weight:700;
    width:20%;
    margin:0 auto;
    border:2px solid #696969;
    text-align:center;
    &:hover{
        color:#696969;
        background:#fff;
        cursor:pointer;
    }
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 30%;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
        width: 45%;
    }
    @media all and (max-width: 360px){
        width: 80%;
    }
    @media all and (max-width: 320px){

    }
    `