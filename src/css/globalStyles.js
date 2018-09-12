import 'typeface-montserrat';
import { injectGlobal } from 'emotion';
import { position } from 'polished';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    button,
    a {
        &:focus,
        &:active {
            outline: none;
        }
    }

    .block {
        display: block;
    }
    
    #myCarousel {
        height: 400px;
    }

    .navbar-brand {
        text-align: center;
        position: relative;
    }
    
    .logo-text {
        ${position('absolute', 0)};
        font-size: 28px;
        color: white;
        height: 45px;
        margin: auto;
        text-transform: lowercase;
        display: block
        z-index: 2;
    }

    .navbar-brand::before {
        display:block;
        width: 130px;
        height: 130px;
        margin: 18px auto;
        content: '';
        background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
        border-radius: 50%;
    }


`;
