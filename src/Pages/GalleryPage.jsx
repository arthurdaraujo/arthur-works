import Styled from "styled-components";
import illustrations from "../mock.js";
import {useNavigate} from "react-router-dom";

export default function GalleryPage() {
    const navigate = useNavigate();

    return (
        <MainStyled>
            <H1Styled>
                ILLUSTRATIONS
            </H1Styled>

            <nav>
                <button>ALL</button>
                <button>CHARACTER DESIGN</button>
                <button>SCIENTIFIC</button>
                <button>FANTASY</button>
                <button>FAN ART</button>
            </nav>

            <SectionStyled>
                {illustrations.map(illustration => (
                        <div 
                            key={illustration.id}
                            onClick={() => navigate(`./${illustration.id}`)}                        
                        >
                            <img src={illustration.image} loading="lazy" alt="" />
                        </div>
                    ))
                }             
            </SectionStyled>

        </MainStyled>
    );
}

const MainStyled = Styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 40px;

    nav{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        button{
            background: transparent;
            border:none;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            transition: .25s;
            font-family: "Datatype", monospace;
            font-size:17px;
            color: #111;

            &:hover{
                color: #818181;
                border-bottom-color: #818181;
            }

            &:active{
                color: #B3B3B3;
                border-bottom-color: #B3B3B3;
            }
        }
    }

    @media(max-width:600px){
        padding: 0 20px;
    }
`;

const H1Styled = Styled.h1`
    margin: 100px 0 30px;
    font-size:38px;
    font-weight:500;
`;

const SectionStyled = Styled.section`

    margin: 20px 0 40px;
    columns: 3 340px;
    column-gap: 20px;

    div{
        break-inside: avoid;
        margin-bottom: 20px;
        overflow: hidden;
        cursor: pointer;
        position: relative;

        &::after{
            content: "";            
            position: absolute;
            inset:0;
            background:rgba(255, 255, 255, 0.30);
            opacity:0;
            transition: opacity .35s ease;
            pointer-events:none;
        }

        &:hover::after{
            opacity:1;
        }
    }

    img{
        width:100%;
        display:block;
        transition:transform .35s ease;
    }

    div:hover img{
        transform:scale(1.03);
    }
`;