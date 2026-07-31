import styled from "styled-components";

export default function HamburguerMenuComponent({ isOpen, onToggle }) {
    return (
        <HamburgerButton
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={onToggle}
            $isOpen={isOpen}
        >
            <span />
            <span />
            <span />
        </HamburgerButton>
    );
}

const HamburgerButton = styled.button`
    display: none;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 28px;
        height: 20px;
        padding: 0;

        border: none;
        background: none;
        cursor: pointer;

        span {
            width: 100%;
            height: 2px;

            background: #2f2f2f;
            border-radius: 999px;

            transform-origin: center;

            transition:
                transform .35s ease,
                opacity .25s ease,
                background-color .25s ease;
        }

        span:nth-child(1) {
            transform: ${({ $isOpen }) =>
                $isOpen
                    ? "translateY(9px) rotate(45deg)"
                    : "translateY(0) rotate(0deg)"};
        }

        span:nth-child(2) {
            opacity: ${({ $isOpen }) =>
                $isOpen ? 0 : 1};

            transform: ${({ $isOpen }) =>
                $isOpen
                    ? "scaleX(0)"
                    : "scaleX(1)"};
        }

        span:nth-child(3) {
            transform: ${({ $isOpen }) =>
                $isOpen
                    ? "translateY(-9px) rotate(-45deg)"
                    : "translateY(0) rotate(0deg)"};
        }

        &:hover span {
            background: #5c5c5c;
        }

        &:active span {
            background: #8a8a8a;
        }
    }
`;