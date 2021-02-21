import styled from 'styled-components';
import Search from 'public/search.svg';

const Container = styled.div`
    position: relative;
`;

const Input = styled.input.attrs(() => ({ className: 'input', autoComplete: 'off' }))`
    border: 2px solid ${({ theme: { colors: { primary } } }) => `${primary}5e`};
    border-radius: 4px;
    width: 100%;
    height: 56px;
    padding: 16px 210px 16px 48px;
    font-size: 1rem;
    color: ${({ theme: { colors: { primary } } }) => primary};
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: left 16px center;
    background-size: 16px 16px;
`;

export {
    Container,
    Input,
};
