import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ className: 'submit-button' }))`
    border: none;
    background-image: ${({ theme: { colors: { buttonColor } } }) => buttonColor};
    color: ${({ theme: { colors: { onButtonColor } } }) => onButtonColor};
    border-radius: 30px;
    cursor: pointer;
    transition: background-image 0.5s ease, color 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 195px;
    height: 32px;
    font-size: 1rem;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
        background-image: ${({ theme: { colors: { buttonOnHoverColor } } }) => buttonOnHoverColor};
        color: ${({ theme: { colors: { active } } }) => active};
        transition: background-image 0.5s ease, color 0.5s ease;
    }
`;

export default Button;
