import 'typeface-montserrat';
import { injectGlobal } from 'emotion';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    button,
    a.button {
        &:focus,
        &:active {
            outline: none;
        }
    }
`;
