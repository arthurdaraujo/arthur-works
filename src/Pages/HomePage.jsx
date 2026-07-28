import Styled from "styled-components";
import image1Large from "../assets/drawings/1large.png";
import image1Medium from "../assets/drawings/1medium.png";
import image1Small from "../assets/drawings/1small.png";

export default function HomePage() {
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
                    <source media="(max-width: 600px)" srcSet={image1Small} />
                    <source media="(max-width: 1100px)" srcSet={image1Medium} />
                    <img src={image1Large} alt="Arthur Works featured illustration" />
                </picture>
            </ImgContainerStyled>
        </HomePageStyled>
    );
}

const HomePageStyled = Styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: calc(100vh - 72px);

    overflow: hidden;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        padding-top: 96px;
        gap: 24px;
    }
`;

const ArticleStyled = Styled.article`
    flex: 1;
    max-width: 560px;

    padding-left: clamp(24px, 7vw, 120px);
    padding-right: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    z-index: 2;

    span{
        font-size: .95rem;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: #2E2E2E;
        font-weight: 700;
    }

    h1{
        font-size: clamp(3.4rem, 6vw, 6.2rem);
        font-weight: 500;
        line-height: .95;
        margin: 0;
    }

    p{
        max-width: 440px;
        font-size: clamp(1rem, 1.2vw, 1.18rem);
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
    position: relative;

    flex: 1;

    min-height: 620px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-right: clamp(16px, 3vw, 56px);

    picture{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    img{
        width: min(860px, 100%);
        height: 100%;

        object-fit: cover;
        object-position: 78% center;

        transform: scale(1.34);
        transform-origin: right center;

        display: block;
    }

    

    @media (max-width: 1100px) {
        min-height: 560px;

        img{
            transform: scale(1.22);
            object-position: 72% center;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        min-height: 460px;
        padding-right: 0;

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