import { injectGlobal } from 'emotion';
import WebFont from 'webfontloader';

WebFont.load({
google: {
    families: ['Assistant|300|800']
}
});

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Assistant', Helvetica, sans-serif;
    }

    button,
    a {
        &:focus,
        &:active {
            outline: none;
        }
    }

    #app {
        position: relative;
    }

`;
