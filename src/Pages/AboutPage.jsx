import Styled from "styled-components";
import aboutimage from "../Assets/aboutimage.jpg";
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
                    I enjoy working with different techniques, styles and themes. 
                    Some pieces are based on careful observation, while others come 
                    entirely from imagination. Whether I'm using graphite, ink, watercolor or 
                    digital painting, I always try to create work with care and attention to detail.

                    <br /><br />
                    This portfolio brings together personal projects, 
                    studies, fan art and finished illustrations. Each 
                    one represents a different part of my creative process.
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
    //flex: .9;
    max-width:450px;
    height:calc(100vh - 80px);

    //border:2px solid red;

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