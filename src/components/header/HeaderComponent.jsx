import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bgImage from "../../assets/paper-texture-header.png";
import HamburguerMenuComponent from "../menu/HamburguerMenuComponent";
import { useState } from "react";

export default function HeaderComponent() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderStyled isOpen={isMenuOpen}>
            <HeaderContentStyled>

                <LogoStyled to="/">
                    Arthur Works
                </LogoStyled>

                <NavStyled aria-label="Main navigation">
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </NavStyled>

                <HamburguerMenuComponent
                    isOpen={isMenuOpen}
                    onToggle={() => setIsMenuOpen(prev => !prev)}
                />
                
            </HeaderContentStyled >

          
            <SubNavStyled isOpen={isMenuOpen}>
                
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                  
            </SubNavStyled>          

        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    position: fixed;
    text-transform: uppercase;
    font-family: "Datatype", monospace;
    inset: 0 0 auto 0;

    height: 72px;

    z-index: 1000;

    user-select: none;

    background-image: url(${bgImage});
    background-repeat: repeat;

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    @media (max-width: 600px) {
        background-image:  ${props => props.isOpen ? "none" : `url(${bgImage})` };;
        background-color: ${props => props.isOpen ? "rgb(247, 245, 240)"  : "transparent"};
    }    
`;

const HeaderContentStyled = styled.div`
   
    width: min(1400px, calc(100% - 80px));

    height: 100%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:600px){
        width: calc(100% - 40px);
    }
`;

const LogoStyled = styled(NavLink)`
    font-size: 1.15rem;
    font-weight: 500;

    color:#2F2F2F;

    letter-spacing:.05em;

    transition: color .25s ease;

    &:hover{
        color:#5C5C5C;
    }

    &:active{
        color:#8A8A8A;
    }
`;

const NavStyled = styled.nav`
    display:flex;
    align-items:center;
    gap:36px;

    @media(max-width:600px){
        display:none;
    }

    a{

        position:relative;

        font-size:.95rem;
        letter-spacing:.08em;

        color:#2F2F2F;

        transition:color .25s ease;

    }

    a::after{

        content:"";

        position:absolute;

        left:0;
        bottom:-5px;

        width:100%;
        height:1.5px;

        background:#2F2F2F;

        transform:scaleX(0);
        transform-origin:left;

        transition:transform .25s ease;

    }

    /* Link ativo */
    a[aria-current="page"]::after{
        transform:scaleX(1);
    }

    /* Só aplica hover aos links que NÃO estão ativos */
    a:not([aria-current="page"]):hover{
        color:#5C5C5C;
    }

    a:not([aria-current="page"]):hover::after{
        transform:scaleX(1);
    }

    a:active{
        color:#8A8A8A;
    }
`;

const SubNavStyled = styled.nav`
    display: none;
    background-color: rgb(247, 245, 240);
    width: 100%;       
   
    @media (max-width: 600px) {
        box-shadow: 0 3px 5px -2px rgba(1, 1, 1, 0.09);
        display:flex;
        flex-direction:column;
        align-items:center;
        //justify-content: center;
        gap:20px;
        height: ${props => props.isOpen ? "100px" : "0px"};
  
        transition: height  .15s;

        a{
          
            font-size:.95rem;
            letter-spacing:.08em;
            color:#2F2F2F;
            transition:all .25s ease;

        }

        a:hover{
            color: rgb(156, 156, 156);
            transform:scale(1.1);
        }

        a:active{
            color: rgb(192, 192, 192);
            transform:scale(1);
        }
        
    }
    overflow: hidden;
`