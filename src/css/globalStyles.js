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

    .navbar {
        position: static;
    }

    .navbar-toggler {
        position: absolute;
        top: 18px;
        right: 18px;
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
