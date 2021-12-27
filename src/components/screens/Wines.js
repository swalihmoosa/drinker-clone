import React from 'react'
import styled from 'styled-components'
import Black from "../images/store_img1.png"
import Red from "../images/store_img2.png"
import White from "../images/store_img3.png"

export default function Wines() {
    return (
        <>
            <Section id="wines">
                <Wrap className="wrapper">
                    <H3>
                        Best Wines 
                        <A href="#">
                             In Our Shop
                        </A>
                    </H3>
                    <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                    quisquam vel quis dicta praesentium, incidunt nostrum.
                    </P>
                    <Ul>
                        <Li>
                            <WineImg>
                                <img src={Black} alt="Black wine" />
                            </WineImg>
                            <Right>
                                <H4>
                                    Black Wine
                                </H4>
                                <Lip>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                </Lip>
                                <Read>
                                    Read More
                                </Read>
                            </Right>
                        </Li>
                        <Li>
                            <WineImg>
                                <img src={Red} alt="Black wine" />
                            </WineImg>
                            <Right>
                                <H4>
                                    Red Wine
                                </H4>
                                <Lip>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                </Lip>
                                <Read>
                                    Read More
                                </Read>
                            </Right>
                        </Li>
                        <Li>
                            <WineImg>
                                <img src={White} alt="Black wine" />
                            </WineImg>
                            <Right>
                                <H4>
                                    White Wine
                                </H4>
                                <Lip>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero facilis doloribus voluptate 
                                quisquam vel quis dicta praesentium, incidunt nostrum.
                                </Lip>
                                <Read>
                                    Read More
                                </Read>
                            </Right>
                        </Li>
                    </Ul>
                </Wrap>
            </Section>
        </>
    )
}
const Section = styled.section`
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
const Ul = styled.ul``
const Li = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:25px;
    align-items: center;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        flex-wrap:wrap;
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
const WineImg = styled.div`
    width:20%;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){
        width: 25%;
    }
    @media all and (max-width: 768px){
        margin:0 auto;
        width: 40%;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
        width: 70%;
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }
`
const Right = styled.div`
    width:75%;
    padding:25px 0;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){
        width: 70%;
    }
    @media all and (max-width: 768px){
        width:90%;
        margin:0 auto;
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
    font-size:30px;
    margin-bottom:25px;
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
const Lip = styled.p`
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
const Read = styled.a`
    color:#000;
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