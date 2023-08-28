import styled from 'styled-components';


export const ContainerHeader = styled.header`
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: var(--white);

    .Btn-pokedex {
        position: absolute;
        right: 80px;
        width: 287px;
        height: 74px;
        border: none;
        border-radius: 8px;
        background-color: var(--blue-btn);
        color: var(--white);
        font-family: 'Poppins', cursive;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    .Btn-todos-pokemons {
        position: absolute;
        left: 90px;
        border: none;
        font-size: 24px;
        background-color: #FFFFFF;
        font-weight: bold;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
        }
    }


    .Btn-todos-pokemons img {
        position: absolute;
        top: 2px;
        right: 200px;
    }

    .Btn-excluir-da-pokedex {
        position: absolute;
        right: 80px;
        width: 226px;
        height: 57px;
        border: none;
        border-radius: 8px;
        background-color: var(--red-btn);
        color: var(--white);
        font-family: 'Poppins', cursive;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`;