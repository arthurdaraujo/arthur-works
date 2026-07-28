import styled from "styled-components";
import bgImage from "../../assets/paper-texture-header.png"
import HamburguerMenuComponent from "../menu/HamburguerMenuComponent";

export default function HeaderComponent() {
  return (
    <HeaderStyled>
      <a href="/" >ARTHUR WORKS</a>

      <NavStyled>
        <a href="/gallery">GALLERY</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </NavStyled>

      <HamburguerMenuComponent/>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  //background-color: #f1f1f1;   
  background-color: transparent;
  user-select: none;
  
  font-family: "Datatype", monospace;
  font-optical-sizing: auto;
  font-weight: 400;  
  font-size: 19px;
 
  height: 60px;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between; 
  align-items: center;
  color: #2f2f2f;
  background-image: url(${bgImage});
  //border-bottom:1px solid rgba(0,0,0,.05);
  backdrop-filter: blur(10px);

  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 600px) {
    //background-color: red;
  }
`

const NavStyled = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    display: none;
  }

  a{
    border: 2px solid transparent;
    transition: .25s;
  }
  

  a:hover{
    color: #818181;
    border-bottom: 2px solid #818181;
  }
  a:active {
    color:  #b3b3b3;  
    border-bottom: 2px solid #b3b3b3;;
  }
`