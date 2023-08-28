import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --deep-dark-grey: #5E5E5E;
        --white: #FFFFFF;
        --blue-btn: #33A4F5;
        --red-btn: #FF6262;
        --green-grass: #729F92;
        --orange-fire: #EAAB7D;
        --blue-water: #71C3FF;
        --green-bug: #76A866;
        --brown-normal: #BF9762;
    }

    h1 {
        font-family: 'Poppins', cursive;
        font-size: 35px;
        color: var(--white);
    }

    h2 {
        font-family: 'Poppins', cursive;
        font-size: 32px;
        color: var(--white);
    }

    span {
        font-family: 'Poppins', cursive;
        font-size: 16px;
        font-weight: bold;
        color: var(--white);
    }

    body {
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--deep-dark-grey);
    }
`