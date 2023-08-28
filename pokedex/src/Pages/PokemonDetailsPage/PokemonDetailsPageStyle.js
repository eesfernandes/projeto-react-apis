import styled from 'styled-components';

export const ContainerPokemonDetailsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 200px;
    
    .MarcaDagua{
        position: absolute;
        top: 309px;
        right: 80px;
        height: 630px;
       
    }

    h1{
        position: relative;
        bottom: 22px;
        right: 670px
    }

`;

export const CardPokemonDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    border-radius: 38px;
    width: 95%;
    height: 100%;
    background-color: ${(props) => props.color};
    padding: 30px 0;

    .Column1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 50px;
        width: 282px;
        height: 100%;
    }

    .Column1 img{
        width: 282px;
        height: 100%;
        background-color: var(--white);
        border-radius: 8px;
    }

    .Column2{
        display: flex;
        flex-direction: column;
        width: 343px;
        height: 613px;
        background-color: var(--white);
        border-radius: 8px;
        padding: 0 20px;

        p{
            display: flex;
            border-style: solid;
            border-bottom-width: 1px;
            border-top-width: 0;
            border-right-width: 0;
            border-left-width: 0;
            border-color: silver;
            margin: 6px;
        }

        progress{
            width: 180px;
            padding: 10px;
            margin-left: 5px;
        }

        .total{
            margin: 16px 8px;
            font-weight: 550;
        }

    }

    .h2Columns{
        color: black;
    }

    .Column3{
        display: flex;
        flex-direction: column;
        border-radius: 8px;
    }

    .PokemonName{
        position: relative;
        bottom: 35px;
    }

    .typesContainer{
        display: flex;
        position: relative;
        bottom: 60px;
        gap: 10px;
    }

    .ContainerMoves{
        width: 292px;
        height: 453px;
        background-color: var(--white);
        border-radius: 8px;
        padding: 0 20px;
    }

    .itensMoves{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: 27px;
        border-radius: 12px;
        background-color: #ECECEC;
        padding: 10px;
    }

    .Pokemon{
        position: relative;
        bottom: 330px;
        height: 270px;
    }
`