import Styled from "styled-components";
import {useParams, Link, useNavigate} from "react-router-dom";
import illustrations from "../mock.js";
import { useEffect, useState } from "react";

export default function IllustrationPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const illustration = illustrations.find(illustration => illustration.id === parseInt(id));

        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
            //setCurrentImage((prev) => prev + 1);
            nextButtonHandler();
            }

            if (event.key === "ArrowLeft") {
            //setCurrentImage((prev) => prev - 1);
            backButtonHandler();
            }
        };

        !illustration && navigate("*");

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

        //setIsExpanded(false); // Reset the expanded state when the id changes

    }, [id, navigate, nextButtonHandler, backButtonHandler]);

    function backButtonHandler()  {
        if (parseInt(id) > 1) {
            navigate(`/gallery/${parseInt(id) - 1}`);
        } else {
            navigate(`/gallery/${illustrations.length}`);
        }
    }

    function nextButtonHandler() {
        if (parseInt(id) < illustrations.length) {
            navigate(`/gallery/${parseInt(id) + 1}`);
        } else {
            navigate(`/gallery/1`);
        }
    }

    function handleImageClick() {
        //alert("Image clicked! You can implement your desired functionality here.");

        setIsExpanded(true);
    }

    return (
        <MainStyled>
         
            <ExpandedContainerStyled isExpanded={isExpanded}>
                <button onClick={() => setIsExpanded(false)}>&#10005;</button>

                <div>
                    <img src={illustrations[id - 1]?.image} loading="lazy" alt={illustrations[id - 1]?.title} /> 
                </div>
            
            </ExpandedContainerStyled>


            <LinkStyled to="/gallery">&larr; Back to Gallery</LinkStyled>
            
            <ContainerStyled>
                <ImgContainerStyled>
                    <button onClick={backButtonHandler}>‹</button>
                    
                    <ImageWrapperStyled onClick={() => handleImageClick()}>
                        <img src={illustrations[id - 1]?.image} loading="lazy" alt={illustrations[id - 1]?.title} />
                    </ImageWrapperStyled>

                    <button onClick={nextButtonHandler}>›</button>
                </ImgContainerStyled>

                <DescriptionStyled>
                    <h1>{illustrations[id - 1]?.title}</h1>

                    <p>{illustrations[id - 1]?.year}</p>
                </DescriptionStyled>

            </ContainerStyled>
            
        </MainStyled>
    );

}

const MainStyled = Styled.main`
    padding: 10px 40px 0 40px;

    //border: 1px solid #5b02ff;

    @media(max-width:900px){
        padding: 10px 0px 0 0px;
        //border: 1px solid #02ff17;
    }
`

const ContainerStyled = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    //border: 1px solid #5b02ff;
`

const ImgContainerStyled = Styled.div`
    user-select: none;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;  
    //height: 70vh;   
    
    //border: 1px solid #5b02ff;
    
    img{
        height: 80vh;
        
        //border: 1px solid #02ff02;
        
        object-fit: cover; 
    }

    button{        
       color: #858585;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 60px;

        &:hover{
            color: #adadad;
        }
    }

    @media(max-width:1500px){
        //padding: 10px 0px 0 0px;
        //border: 3px solid #ff022c;
        //max-width: 80vw; 
        width: 100%; 
        height: 75vh;
        
        img{
            object-fit: contain;
            max-height: 70vh;
            max-width: 100%;
            height: auto;
            //border: 1px solid #ffaf02;
        }
    }

`

const ImageWrapperStyled = Styled.div`
    position: relative;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;   
    
    

    &::after{
        content: "⛶";
        color: #ffffff;
        font-size: 40px;
        text-shadow: 0 0 5px #000000;        
        text-align: right;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.26);
        transition: opacity 0.3s ease;
        opacity: 0;

        //overflow: hidden;
    }

    &:hover::after{
        opacity: 1;
    }

    @media(max-width:1500px){
        //border: 1px solid #ffaf02;
        //height: 100%;
        //width: 100%;
        &::after{
            //font-size: 30px;
           // background: transparent;
        }
        
    }

`

const DescriptionStyled = Styled.div`
    padding-top: 5px;
    max-width: 500px;
    text-align: center;
    margin: 0 auto;

    h1{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0px;
    }

    p{
        font-size: 1.4rem;
        font-weight: 400;
    }   

`

const LinkStyled = Styled(Link)`
    width: 190px;
    text-align: center;
    margin-top: 100px;
    
    cursor: pointer;
    user-select: none;
    letter-spacing: .08em;
    font-size: 1.25rem;
    font-weight: 800;
    font-family: "Datatype", monospace;
    transition: color .25s ease, transform .25s ease, background-color .25s ease, border-color .25s ease;

    &:hover{        
        color: #525252;
        transform: translateX(-3px);
    }

    &:active{
        color:  #747474;
        transform: translateX(0);
    }


    @media(max-width:900px){
        margin-left: 40px;        
    }
`

const ExpandedContainerStyled = Styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0);
    opacity: ${props => props.isExpanded ? 1 : 0};
    pointer-events: ${props => props.isExpanded ? "auto" : "none"};
    transition: opacity 0.3s ease;
    user-select: none;

    button{    
        position:fixed;
        z-index: 10000;
        color: #ffffff;
        text-shadow: 0 0 5px #000000;   
        background: transparent;
        border: none;
        font-size: 40px;
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;        
    }

    div{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);

        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            height: 100%;
            object-fit: cover; 

            @media(max-width:900px){
                max-height: 100vh;
                height: auto;
                max-width: 100vw; 
                //border: 2px solid #02ff02;    
            }


        }
    }
`