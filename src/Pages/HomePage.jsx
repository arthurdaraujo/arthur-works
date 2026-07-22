import Styled from "styled-components";
import image1 from "../assets/drawings/1.png"

export default function HomePage() {
    return (
        <HomePageStyled>
            <ArticleStyled>
              <span>Traditional & Digital Illustrations

              </span>

                <h1>Arthur Works</h1>

                <p>A collection of original illustrations created through traditional and digital media.</p>

                <ButtonViewGalleryStyled onClick={() => window.location.href = '/gallery'}>
                    ENTER GALLERY &rarr;
                </ButtonViewGalleryStyled>
            </ArticleStyled>

            <ImgContainerStyled>
               
            </ImgContainerStyled>
            
        </HomePageStyled>
    )
}   

const HomePageStyled = Styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    //padding:0 20px;
    overflow: hidden;
`

const ArticleStyled = Styled.article`    
    //border:1px solid red;
    flex: 1;
    width: 42%;
    height: 100vh;
    padding-left: 9vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    span{
        font-size: .98rem;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: #2e2e2e;
        font-weight: 800;
    }

    h1{
        font-size: clamp(3.5rem, 5.6vw, 6rem);
        font-weight: 500;
        margin: 0;
    }

    p{
        max-width: 420px;
        font-size: 1.2rem;
        line-height: 1.8;
        color: #3f3f3f;
        font-weight: 500;
    }
`
const ButtonViewGalleryStyled = Styled.button`
    width: fit-content;
    margin-top: 20px;
    padding: 14px 28px;
    background: transparent;
    border: 1px solid #111;
    cursor: pointer;
    user-select: none;
    transition: .25s;

    &:hover{
        background:#111;
        color:white;
    }

    &:active{
        background-color: #525252;
        border: 1px solid #525252;
        color: #ffffff;
    }
`

const ImgContainerStyled = Styled.div`
   // overflow: hidden;
  // padding-left: 7vw;
  // border:1px solid red;
   height: 100vh;
    width: 57%;
    //box-shadow: inset 0px 0px 60px 60px rgb(248, 246, 242);
   background-image: url(${image1});
    background-size: cover; 
    background-position: 25px 3px; 
    background-repeat: no-repeat;         
`