import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        background-color: #FAFAFA;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        min-width: 500px;
    }

    #root{
        width: 100%;
        height: 100%;
    }

    div{
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    input,button {
        outline: none;

    }
    
`;

export default GlobalStyle;
