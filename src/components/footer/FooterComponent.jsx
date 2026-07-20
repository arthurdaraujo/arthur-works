import Styled from "styled-components";

export default function FooterComponent() {
    return (        
        <FooterStyled>  
            <h1>Footer</h1>
        </FooterStyled>

    )}

    const FooterStyled = Styled.footer`
        background-color: #111111;   
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;        
    `