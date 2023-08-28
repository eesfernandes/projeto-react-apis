import styled from 'styled-components';


export const ContainerPokemonCard = styled.div`
    display: flex;
    width: 440px;
    height: 210px;
    border: none;
    border-radius: 12px;
    background-color: ${(props) => props.color};


    .LeftCard {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;       
    }

    span {
        margin: 20px 0 0 20px;
    }

    h2 {
        margin: -65px 0 0 20px;
    }

    .TypesContainer {
        width: 192px;
        height: 31px;
        display: flex;
        gap: 7px;
        margin: -50px 0 0 18px;
    }

    .LeftCard button {
        margin: 0 0 20px 20px;
        width: 146px;
        border: none;
        border-radius: 8px;
        background: transparent;
        font-size: 16px;
        font-weight: bold;
        color: var(--white);
        text-align: start;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .RightCard {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }

    .MarcaDgua {
        position: relative;
        top: 0px;
        left: -2px;
        width: 230.73px;
        height: 222.73px;
        
    }

    .Pokemon {
        position: relative;
        top: -247px;
        left: -5px;
        width: 193px;
        height: 193px;
    }

    .BtnCapturar {
        position: relative;
        bottom: 227px;
        left: -25px;
        width: 146px;
        height: 38px;
        padding: 7px 10px 7px 10px;
        border: none;
        border-radius: 8px;
        background-color: var(--white);
        font-size: 16px;
        transition: 0.3s;
        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    .BtnExcluir {
        position: relative;
        bottom: 227px;
        left: -25px;
        width: 146px;
        height: 38px;
        padding: 7px 10px 7px 10px;
        border: none;
        border-radius: 8px;
        background-color: var(--red-btn);
        color: var(--white);
        font-size: 16px;
        transition: 0.3s;
        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

`