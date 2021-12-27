import React from 'react'
import styled from 'styled-components'
import  Bottom from "../images/bottom.png"

export default function Footer() {
    return (
        <>
            <section id="footer" >
                <Wrap className="wrapper">
                    <Talk>
                        <H4>
                        Let's talk for wines
                        </H4>
                        <P>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos officia quae facilis commodi 
                        perspiciatis illum fugiat quaerat nam ipsam atque nostrum expedita quos, corrupti dignissimos assumenda corporis? Nihil,
                         nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos officia quae facilis commodi perspiciatis illum 
                        fugiat quaerat nam ipsam atque nostrum expedita quos, corrupti dignissimos assumenda corporis? Nihil, nisi?
                        </P>
                        <H3>
                        Free Multipurpose Responsive Landing Page 2021
                        </H3>
                    </Talk>
                    <Form>
                        <Text type="text" placeholder="Name">

                        </Text>
                        <Mobile  type="number" placeholder="Phone Number">

                        </Mobile>
                        <Mail  type="email" placeholder="Email">

                        </Mail>
                        <Area placeholder="Message" rows="3">

                        </Area>
                        <Submit>
                            Send
                        </Submit>
                    </Form>
                    <Bottomdiv>
                        <img src={Bottom} alt="Bottom" />
                    </Bottomdiv>
                </Wrap>
                <Footerr>
                <Wrap className="wrapper">
                    <Footerp>
                        Copyright 2021 All Right Reserved By Free html Templates
                    </Footerp>
                </Wrap>
                </Footerr>
            </section>
            
        </>
    )
}
const Wrap = styled.section`
    border-bottom:2px solid #696969;
    padding:50px 0;
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    position:relative;
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
const Talk = styled.div`
    width:45%;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 90%;
        text-align: center;
        margin: 0 auto 25px;
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
    margin-bottom:25px;
    font-size:30px;
    font-weight:700;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){
        font-size: 25px;
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
const P = styled.p`
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
    font-size:35px;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){
        font-size: 25px;
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
const Form = styled.form`
    width:45%;
    @media all and (max-width: 1280px){

    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){

    }`
const Text = styled.input`
    width: 100%;
    border-bottom: 2px solid;
    margin-bottom: 25px;
    padding: 10px 20px;
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
const Mobile = styled.input`
    width: 100%;
    border-bottom: 2px solid;
    margin-bottom: 25px;
    padding: 10px 20px;
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
const Mail = styled.input`
    width: 100%;
    border-bottom: 2px solid;
    margin-bottom: 25px;
    padding: 10px 20px;
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
const Area = styled.textarea`
    width: 100%;
    border-bottom: 2px solid;
    margin-bottom: 25px;
    padding: 10px 20px;
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
const Submit = styled.a`
    display: block;
    width: 20%;
    background: #696969;
    padding: 15px 25px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    margin-top: 25px;
    border:2px solid #696969;
    &:hover{
        background:#fff;
        color:#696969;
        cursor:pointer;
    }
    @media all and (max-width: 1280px){
        width: 30%;
    }
    @media all and (max-width: 980px){

    }
    @media all and (max-width: 768px){
        width: 40%;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 60%;
    }
    @media all and (max-width: 320px){

    }`
const Footerr = styled.footer`
    padding:5px 0;`
const Footerp = styled.p`
    text-align:center;
    margin:0 auto;
    width:75%;
    font-weight:700;
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
const Bottomdiv = styled.div`
    left: 0px;
    position: absolute;
    top: 81%;
    width: 6%;
    @media all and (max-width: 1280px){
        top: 86%;
        width: 7%;
    }
    @media all and (max-width: 980px){
        top: 94%;
        width: 7%;
    }
    @media all and (max-width: 768px){
        top: 90%;
        width: 13%;
    }
    @media all and (max-width: 640px){

    }
    @media all and (max-width: 480px){
        top: 94%;
    }
    @media all and (max-width: 360px){

    }
    @media all and (max-width: 320px){
        display:none;
    }`
