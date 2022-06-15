import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button { margin: 0; padding:0; }
    ul { list-style: none; }
    button { border:0; outline:0 }

    body{
        margin: 0 auto;
        /* max-width: 500px; */
        overscroll-behavior: none;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }

    #root {
        margin:0 auto;
        padding: 8px;
        height: 100vh;
    }
`