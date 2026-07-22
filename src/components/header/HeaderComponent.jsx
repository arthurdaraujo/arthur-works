import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <HeaderStyled>
      <a href="/" >ARTHUR WORKS</a>

      <ContainerStyled>
        <a href="/gallery">GALLERY</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </ContainerStyled>
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
`

const ContainerStyled = styled.div`
  display: flex;
  gap: 20px;

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