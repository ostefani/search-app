import styled from 'styled-components';

const ResultsItemComponent = styled.li`
    display: block;
    padding: 16px 32px 16px 48px;
    border: 1px solid
        ${({
            theme: {
                colors: { primary },
            },
        }) => primary};
    &:not(:first-child) {
        border-top: 0;
    }
`;

export default ResultsItemComponent;
