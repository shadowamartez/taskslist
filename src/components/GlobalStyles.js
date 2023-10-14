import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        align-items: center; 
        height: 100vh;
        background-color: #f7f7f2;
    }

    code {
    font-family: 'Noto Sans', sans-serif;
    }

    button {
        width: 100px;
        height: 30px;
        font-family: 'Noto Sans', sans-serif;
        color: #222725;
        background-color: #e4e6c3;
        border-radius: ;
        border-radius: 5px;
        border: none; 
    }

    h1 {
        text-align: center;
        color: #121113;
    }

    h2 {
        text-align: center;
        color: #222725;
    }

    label {
        color: #222725;
    }
`; 