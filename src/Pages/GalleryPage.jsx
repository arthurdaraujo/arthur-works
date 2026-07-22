import Styled from 'styled-components';

export default function GalleryPage() {
    return (
        <MainStyled>
            <H1Styled>
                ILLUSTRATIONS
            </H1Styled>

            <nav>
                <button>ALL</button>

                <button>CARACTER DESIGN</button>

                <button>SCIENTIFIC</button>

                <button>FANTASY</button>

                <button>FAN ART</button>
            </nav>

            <SectionStyled> 
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </SectionStyled>
            
        </MainStyled>
    )
}

const MainStyled = Styled.main`
    //border: 1px solid red;
    display: flex;
    //align-items: center;
    //justify-content: space-evenly;
    flex-direction: column;
    gap: 10px;
    padding: 0 40px;


    nav{
        //border: 1px solid green;    
        display: flex;
        gap: 15px;


        button{
            background: transparent;
            //padding: 0px 0px;
            border: 2px solid transparent;
            cursor: pointer;
            transition: .25s;

            font-family: "Datatype", monospace;
            font-optical-sizing: auto;
            font-weight: 400;  
            font-size: 17px;
            color: #111;

            &:hover{
                color: #818181;
                border-bottom: 2px solid #818181;
            }
            &:active {
                color:  #b3b3b3;  
                border-bottom: 2px solid #b3b3b3;;
            }
        }
    }
`

const H1Styled = Styled.h1`
    margin: 100px 0 30px 0;
    font-size: 38px;
    font-weight: 500;       
`

const SectionStyled = Styled.section`
    //border: 1px solid red;
    margin: 20px 0;
    //display: flex;
    //flex-wrap: wrap;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    
    
    
    div{
        //border: 1px solid blue;
        //width: calc((100% - 40px) / 3);
        height: 300px;
        background: #9e9e9e;
    }
`