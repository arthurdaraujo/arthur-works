import Styled from "styled-components";
import aboutimage from "../Assets/aboutimage.jpg";

export default function AboutPage() {
    return (
        <MainStyled>

            <ArticleStyled>

                <span>ABOUT</span>

                <h1>
                    Hi, I'm Arthur.
                </h1>

                <p>
                    <strong>Creating is my way of exploring ideas.</strong>

                    <br /><br />
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
    padding-top: 80px;

    @media (max-width:1050px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
        padding: 80px 40px;
    }
`;

const ArticleStyled = Styled.article`
    flex: 1.1;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    
    gap: 25px;

    
    span{
        font-size: .9rem;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: #555;
    }

    h1{       
        font-size: clamp(3rem,5vw,5.8rem);
        font-weight: 500;
        line-height: .75;
    }

    p{
        font-size: 1.15rem;
        line-height: 1.7;
        color: #3b3b3b;
    }

    strong{
        display:block;
        margin-bottom: 10px;
        font-size: 1.45rem;
        font-weight: 500;
        color: #111;
    }
`;

const ImageSectionStyled = Styled.section`
    display: flex;
    justify-content: center;
    flex: .9;
    max-width:450px;

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