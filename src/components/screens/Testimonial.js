import React from 'react'
import styled from 'styled-components'
import Man from "../images/plan1.png"
import Slider from "react-slick";

export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <section id="testimonials">
                <Wrap className="wrapper">
                    <H3>
                        Testimonial
                    </H3>
                    <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    </P>
                    <Slider {...settings}>
                        <Li>
                            <DivImg>
                                <img src={Man} alt="Man" />
                            </DivImg>
                            <Name>
                                <H4>
                                    Den Mark
                                </H4>
                                <Namep>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                </Namep>
                            </Name>
                        </Li>
                        <Li>
                            <DivImg>
                                <img src={Man} alt="Man" />
                            </DivImg>
                            <Name>
                                <H4>
                                    Den Mark
                                </H4>
                                <Namep>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                </Namep>
                            </Name>
                        </Li>
                    </Slider>
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
    text-align: center;
    margin-bottom: 25px;
    font-size: 35px;
    font-weight: 700;
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
    text-align: center;
    margin-bottom: 25px;
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
const Li = styled.div`
    display:flex;
    justify-content:space-between;
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
const DivImg = styled.div`
    width:25%;
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

    }`
const Name = styled.div`
    width:90%;
    margin:0 auto;
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
const H4 = styled.h4`
    text-align:center;
    font-size:30px;
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
const Namep = styled.p`
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

    }`