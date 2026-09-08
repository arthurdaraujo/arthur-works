import Styled from "styled-components";
import {useParams, Link, useNavigate} from "react-router-dom";
import illustrations from "../mock.js";
import { useEffect } from "react";

export default function IllustrationPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const illustration = illustrations.find(illustration => illustration.id === parseInt(id));

        !illustration && navigate("*");

    }, [id, navigate]);

    function backButtonHandler() {
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

    return (
        <MainStyled>
            <LinkStyled to="/gallery">&larr; Back to Gallery</LinkStyled>
            
            <ContainerStyled>
                <ImgContainerStyled>
                    <button onClick={backButtonHandler}>&larr;</button>
                    <img src={illustrations[id - 1]?.image} loading="lazy" alt={illustrations[id - 1]?.title} />
                    <button onClick={nextButtonHandler}>&rarr;</button>
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
`

const ContainerStyled = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const ImgContainerStyled = Styled.div`
    width: 80%;
    display: flex;
   
    justify-content: space-between;
    align-items: center;
    gap: 10px;      
   
    //border: 1px solid #3e30ff;
    
    img{
        height: 80vh;
    }

    button{
        
       color: #858585;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 40px;
    }

`

const DescriptionStyled = Styled.div`
    padding-top: 10px;
    max-width: 500px;
    text-align: center;
    margin: 0 auto;

    h1{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 5px;
    }

    p{
        font-size: 1.5rem;
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
`