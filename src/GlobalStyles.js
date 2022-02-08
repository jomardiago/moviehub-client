import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #000000;
        --white: #FFFFFF;
        --red: #ef4444;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        color: var(--black);
        background-color: var(--white);
        font-size: 1em;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;
