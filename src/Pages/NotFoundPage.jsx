import Styled from "styled-components";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/404-r.png";

export default function NotFoundPage() {
    return (
        <MainStyled>
            <SectionStyled>                

                <h1>Page not found.</h1>

                <p>
                    Sorry, the page you're looking for doesn't exist or may have been moved.
                </p>
            

                <LinkStyled to="/">
                    &larr; Back to home
                </LinkStyled>

            </SectionStyled>

            <ImgSectionStyled>
                <picture>
                    <img src={NotFoundImg} alt="404 Not Found" />
                </picture>            
            </ImgSectionStyled>


        </MainStyled>
    );
}

const MainStyled = Styled.main`
    display: flex;
    //gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 50px;

    //background-color: #55ff7a;
    //border: 1px solid #ff5555;
    overflow: hidden;
    

    h1{       
        font-size: clamp(3rem,4.8vw,5.8rem);
        font-weight: 500;
        margin-bottom: 15px;
    }

    p{
        font-size: 1.15rem;
        line-height: 1.7;
        color: #3b3b3b;
    }



    @media (max-width: 1020px){
       flex-direction: column; 
       height: 100%;

       padding-top:50px;
     
        h1{       
            //font-size: clamp(2.3rem,4.8vw,5rem);
            font-weight: 500;
            margin-bottom: 0px;
        }
    }   
`;

const SectionStyled = Styled.section`
 //background-color: #55ff7a;


    flex: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    gap: 15px;

    @media (max-width: 1020px){
        align-items: start;
        gap: 5px;
    }  
`

const ImgSectionStyled = Styled.section`

 //background-color: #019b23;
 
   flex: 1.1;
   img{
        width: 100%;
        height: 102vh;
        object-fit: cover;
        object-position: -65px 20px;
        //background-color: lightcoral;

        

          @media (max-width: 1020px){
                height: 80vh; 
                
                //flex: 0.8;
                //object-fit: contain;
                object-position: bottom;
            }  

            @media (max-width: 515px){
                object-position: -50px bottom;
                //background-color: lightcoral;
            }
   }
`

const LinkStyled = Styled(Link)`
    width: fit-content;

    margin-top: 12px;
    padding: 6px 8px;

    //background: transparent;
    //border: 1px solid #111;

    cursor: pointer;
    user-select: none;

    letter-spacing: .08em;
    font-size: 1.25rem;
    font-weight: 800;
    font-family: "Datatype", monospace;

    transition: color .25s ease, transform .25s ease, background-color .25s ease, border-color .25s ease;

    &:hover{        
        color: #525252;
        transform: translateX(-3px);
    }

    &:active{
        color:  #747474;
        transform: translateX(0);
    }
`