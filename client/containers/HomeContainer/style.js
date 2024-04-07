import styled from 'styled-components';

const Container = styled.div`
    min-width: 300px;
    max-width: 1080px;
    position: relative;
    margin: 50px auto 0 auto;
`;
const Results = styled.ul`
    font-size: 1.5rem;
    color: ${({
        theme: {
            colors: { primary },
        },
    }) => primary};
    margin-top: 40px;
    padding-left: 0;
`;

export { Container, Results };
