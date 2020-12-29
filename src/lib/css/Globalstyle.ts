import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        background-color: #FAFAFA;
        box-sizing: border-box;
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
