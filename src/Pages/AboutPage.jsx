import Styled, { styled } from "styled-components";
import aboutimage from "../Assets/aboutimage.jpg";
import { FaInstagram  } from "react-icons/fa";
import { FaEtsy } from "react-icons/fa";
import { useState } from "react";

export default function AboutPage() {
     useState(() => {
           window.scrollTo(0, 0);
        }, []);

    return (
        <MainStyled>

            <ArticleStyled>

                <span>ABOUT</span>

                <h1>
                    Hi, I'm Arthur.
                </h1>

                <p>
                    <strong>Creating is my way of exploring ideas.</strong>

                    <br />
                    I’m an artist who enjoys drawing and exploring different styles, subjects and techniques. I like experimenting with new ideas and letting each project take its own direction.
                    <br /><br />
                    This portfolio is a collection of my illustrations, studies
                    and personal projects. You can find me on:

                    <br /><br/>
                   
                    <ContainerLogosStyled>
                        <a href="https://www.etsy.com/shop/mydrawingartshopping" target="_blank"> <FaEtsyStyled /></a> 
                        <span aria-hidden="true"></span>                        
                        <a href="https://www.instagram.com/arthur.de.araujo" target="_blank"> <FaInstagramStyled /></a>                       
                    </ContainerLogosStyled>
                    
                    
                    

                    
                </p>

            </ArticleStyled>

            <ImageSectionStyled>

                <img
                    src={aboutimage}
                    alt="Arthur drawing"
                />

            </ImageSectionStyled>

        </MainStyled>
    );
}

const MainStyled = Styled.main`
    display: flex;    
    justify-content: center;    
    gap: 40px;
    //padding-top: 80px;
    max-height: calc(100vh - 80px);
    //height: 100%;


    @media (max-width:1050px){
        //padding-top: 80px;
        max-height: initial;
        flex-direction: column-reverse;
        
        align-items: center;
        //gap: 0px;
        padding: 10px 40px 80px;
    }
        //border:1px solid red;
`;

const ArticleStyled = Styled.article`
    padding-top: 80px;
   // flex: 1.1;
    max-width: 550px;
    display: flex;
    flex-direction: column;

   // border:1px solid red;
    
    gap: 15px;
    height:100%;

    
    span{
        font-size: .9rem;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: #555;
    }

    h1{       
        font-size: clamp(3rem,4.8vw,5.6rem);
        font-weight: 500;
        line-height: .75;
    }

    p{
        font-size: 1.15rem;
        line-height: 1.5;
        color: #3b3b3b;
    }

    strong{
        display:block;
        //margin-bottom: 5px;
        font-size: 1.45rem;
        font-weight: 500;
        color: #111;
    }
        
    @media (max-width:1050px){
        padding-top: 10px;
        
        strong{
           // margin-bottom: -15px;
        }
    }
`;

const ImageSectionStyled = Styled.section`
padding-top: 80px;
    display: flex;
    justify-content: center;
    max-width:450px;
    height:calc(100vh - 80px);


    img{
        width: 100%;
        max-width: 620px;
        aspect-ratio: 4/5;
        object-fit: contain;
        object-position: top;
        display: block;
    }

    @media (max-width:1050px){
        width: 100%;
        max-width: 100%;       

        img{
            object-fit: cover;
            max-width: 550px;
        }
    }
`;

const ContainerLogosStyled = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    gap:35px;    

    span{
        width: 1px;
        height: 50px;
        background-color: #ccc;
    }

    a{
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        //background-color:red;        
    }
`

const FaInstagramStyled = styled(FaInstagram)`
    width:100%;
    height:100%;
    color:black;

    &:hover{
        color:rgb(60,60,60);
    }

    &:active{
        color:rgb(118,118,118);
    }
`

const FaEtsyStyled = styled(FaEtsy)`
    width:100%;
    height:100%;
    color:black;

    &:hover{
        color:rgb(60,60,60);
    }

    &:active{
        color:rgb(118,118,118);
    }
`