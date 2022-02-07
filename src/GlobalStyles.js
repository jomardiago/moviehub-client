import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --lightPrimaryColor: #000000;
        --lightSecondaryColor: #FFFFFF;
        --darkPrimaryColor: #FFFFFF;
        --darkSecondaryColor: #000000;
        --red: #ef4444;
    }

    .dark-theme {
        --primaryColor: var(--darkPrimaryColor);
        --secondaryColor: var(--darkSecondaryColor);
    }

    .light-theme {
        --primaryColor: var(--lightPrimaryColor);
        --secondaryColor: var(--lightSecondaryColor);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        color: var(--primaryColor);
        background-color: var(--secondaryColor);
        font-size: 1em;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;
