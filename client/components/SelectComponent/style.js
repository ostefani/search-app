import styled from 'styled-components';

const Container = styled.form.attrs(() => ({ className: 'select-container' }))`
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 215px;
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(45deg);
        height: 100%;
        width: 2px;
        background: ${({ theme: { colors: { primary } } }) => primary};
    }
    &::after {
        position: absolute;
        top: 0;
        left: 0;
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
