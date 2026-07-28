import { useState } from "react";
import styled from "styled-components";

export default function HamburguerMenuComponent() {
    const [isShowed, setIsShowed] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    function clicking() {
        //alert(!isShowed)
        setHasInteracted(true)
        setIsShowed(!isShowed)
    }

    return (
       <HamburgerButton
        onClick={() => clicking()}
        $hasInteracted={hasInteracted}
        $isShowed={isShowed}>
            <span />
            <span />
            <span />
        </HamburgerButton>
    )
}

const HamburgerButton= styled.button`
    display: none;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        //gap: 2px;
        width:32px;
        height: 18px;
        border: none;
        background: none;
        cursor: pointer;

        

        span {
            border: 1px solid #2f2f2f;
            width: 100%;
            //transition: .8s;
        }

        span:nth-child(1) {
        
            //animation: ${props => props.$isShowed ? `firstchildtransform .3s ease forwards`  : `firstchildretransform .3s ease forwards`};

            animation: ${props => {

                if (!props.$hasInteracted) {
                    return "none"
                } else {

                    if (props.$isShowed) {
                        return `firstchildtransform .3s ease forwards`
                    } else {
                        return `firstchildretransform .3s ease forwards`
                    }    

                }                                      
            }};

        
        }

        span:nth-child(2) {
            animation: ${props => props.$isShowed ? `middlechildtransform .3s ease forwards`  : `middlechildretransform .3s ease forwards`}
        }

        span:nth-child(3) {            
            animation: ${props => props.$isShowed ? `lastchildtransform .3s ease forwards`  : `lastchildretransform .3s ease forwards`}
        }
    }

     @keyframes firstchildretransform {
        0%{
            transform: translateY(7px) rotate(45deg);
        }

        50%{
            transform: translateY(7px) rotate(0deg);
        }
            
        100%{
            transform: translateY(0px) rotate(0deg);
        }
    }

    @keyframes middlechildretransform {
        5%{
            transform: scale(0, 1);
        }
            
        100%{
            transform: scale(1, 1);
        }
    }

    @keyframes lastchildretransform {
        0%{
            transform: translateY(-7px) rotate(-45deg);
        }

        50%{
            transform: translateY(-7px) rotate(0deg);
        }
            
        100%{
            transform: translateY(0px) rotate(0deg);
        }
    }





    @keyframes firstchildtransform {
        50%{
            transform: translateY(7px) rotate(0deg);
        }
            
        100%{
            transform: translateY(7px) rotate(45deg);
        }
    }

    @keyframes middlechildtransform {
        5%{
            transform: scale(0, 1);
        }
            
        100%{
            transform: scale(0, 1);
        }
    }


    @keyframes lastchildtransform {
        50%{
            transform: translateY(-7px) rotate(0deg);
        }
            
        100%{
            transform: translateY(-7px) rotate(-45deg);
        }
    }
`