import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <HeaderStyled>
      <a href="/" >My Gallery</a>

      <ContainerStyled>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </ContainerStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background-color: #f1f1f1;   
  
  font-family: Arial, sans-serif;
  font-size: 18px;
 
  height: 80px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between; 
  align-items: center;
`

const ContainerStyled = styled.div`
  display: flex;
  gap: 20px;

  a{
    border: 2px solid transparent;
  }

  a:hover{
    color: #818181;
    border-bottom: 2px solid #818181;
  }
`