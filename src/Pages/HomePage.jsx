import Styled from "styled-components";
import homeImage from "../assets/home-4.png";
import { useState } from "react";

export default function HomePage() {
    useState(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HomePageStyled>
            <ArticleStyled>
                <span>Traditional & Digital Illustrations</span>

                <h1>Arthur Works</h1>

                <p>
                    A collection of original illustrations created through
                    traditional and digital media.
                </p>

                <ButtonViewGalleryStyled
                    onClick={() => (window.location.href = "/gallery")}
                >
                    ENTER GALLERY &rarr;
                </ButtonViewGalleryStyled>
            </ArticleStyled>

            <ImgContainerStyled>
                <picture>
                   {/*<source media="(max-width: 600px)" srcSet={image1Small} />
                    <source media="(max-width: 1100px)" srcSet={image1Medium} />
                    <img src={image1Large} alt="Arthur Works featured illustration" />*/}
                    <img src={homeImage} alt="Arthur Works featured illustration" />
                </picture>
            </ImgContainerStyled>
        </HomePageStyled>
    );
}

const HomePageStyled = Styled.main`   

    display: grid;
   
    grid-template-columns: 1fr 1fr;
    
    overflow: hidden;
 
    height:100vh;


    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        height: initial;
        flex-direction: column;
        justify-content: center;
        padding-top: 96px;
    }
`;

const ArticleStyled = Styled.article`
   
    padding-left: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  
    gap: 18px;

    z-index: 2;

    span{
        font-size: .95rem;

       // border:1px solid blue;
        //width: fit-content;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: #2E2E2E;
        font-weight: 700;
    }

    h1{
        font-size: clamp(3.4rem, 6.3vw, 6.2rem);
        font-weight: 500;
        line-height: .80;
        margin: 0;
       // border:1px solid blue;
    }

    p{
        max-width: 440px;
        font-size: clamp(1rem, 1.2vw, 1.18rem);
        //border:1px solid blue;
        line-height: 1.8;
        color: #3F3F3F;
        margin: 0;
    }

    @media (max-width: 900px) {
        max-width: 720px;
        padding: 0 20px;
    }
`;

const ButtonViewGalleryStyled = Styled.button`
    width: fit-content;

    margin-top: 12px;
    padding: 16px 34px;

    background: transparent;
    border: 1px solid #111;

    cursor: pointer;
    user-select: none;

    letter-spacing: .08em;
    font-weight: 600;
    

    transition:
        background-color .25s ease,
        color .25s ease,
        border-color .25s ease,
        transform .2s ease;

    &:hover{
        background:#111;
        color:white;
        transform: translateY(-1px);
    }

    &:active{
        background-color: #525252;
        border-color: #525252;
        color: #FFFFFF;
        transform: translateY(0);
    }
`;

const ImgContainerStyled = Styled.div`
  
  

   // clip-path: inset(0 0 0px -50px);
    
  

    padding-top: 80px;
    height: calc(100vh - 80px);



   

    picture{
        
        height: 100vh;
     
        //border:1px solid green;
        
    }

    img{
        //width: min(260px, 100%);
        width:100%;
         
    }

    

   /* @media (max-width: 1100px) {
       // min-height: 560px;
       // border:4px solid red;

        img{
            transform: scale(1.22);
            object-position: 72% center;
        }
    }*/

    @media (max-width: 900px) {
        width: 100%;
        min-height: 460px;
        padding-right: 0;
        padding-top: 30px;
       // border:4px solid blue;

        justify-content: center;

        img{
            width: min(760px, 100%);
            transform: scale(1.08);
            object-position: center top;
        }

    }

    @media (max-width: 600px) {
        min-height: 340px;

        img{
            width: 100%;
            transform: scale(1);
            object-position: center top;
        }
    }
`;