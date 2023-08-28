import styled from 'styled-components';

export const ContainerPokedexPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    h1 {
        position: relative;
        right: 535px
    }
`;

export const ContainerPokedex = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 50px;
    column-gap: 20px;
`