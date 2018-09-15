import { injectGlobal } from 'emotion';
import WebFont from 'webfontloader';
import { rgba, lighten } from 'polished';
import { palette, mediaQueries } from 'css/variables';

WebFont.load({
    google: {
        families: ['Assistant:300,700']
    }
});

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Assistant', Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5,
    .h1, .h2, .h3, .h4, .h5 {
        font-weight: 700;
        color: ${palette.secondary};
    }

    p, li {
        color: ${lighten(0.1, palette.secondary)};
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

    .navbar {
        position: static;
    }

    .navbar-toggler {
        position: absolute;
        top: 18px;
        right: 18px;
    }

    .form-control:focus {
        outline-color: #17a2b8;
        border-color: #17a2b8;
        box-shadow: 0 0 0 0.2rem ${rgba('#17a2b8', 0.2)};
    }
    
    .navbar {
        padding-top: 0;
    }

    @media (max-width: 767px) {
        .form-inline {
            width: 100%;
        }

        .form-inline .form-control {
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 80px);
            margin-right: 5px;
        }
    }
    @media (max-width: 767px) {
        .form-inline .form-group {
            margin-bottom: 0;
            width: auto;
            vertical-align: middle;
        }
    }

`;
