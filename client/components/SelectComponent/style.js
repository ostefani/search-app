import styled from 'styled-components';

const Container = styled.form.attrs(() => ({ className: 'select-container' }))`
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button.attrs(() => ({ className: 'close-button', 'aria-label': 'clear-suggestions' }))`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 215px;
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 15;
        transform: rotate(45deg);
        height: 100%;
        width: 2px;
        background: ${({ theme: { colors: { primary } } }) => primary};
    }
    &::after {
        position: absolute;
        top: 0;
        left: 15;
        content: '';
        transform: rotate(-45deg);
        height: 100%;
        width: 2px;
        background: ${({ theme: { colors: { primary } } }) => primary};
    }
`;

export {
    Container,
    CloseButton,
};
