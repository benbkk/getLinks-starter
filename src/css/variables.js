import { css } from 'emotion';

export const palette = {
    blue: '#007bff',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e83e8c',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
    white: '#fff',
    gray: '#6c757d',
    grayDark: '#343a40',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
};

export const mediaQueries = {
    xl: '@media only screen and (min-width:1200px)',
    lg: '@media screen and (min-width: 992px)',
    md: '@media only screen and (min-width:768px)',
    sm: '@media only screen and (min-width:576px)',
    xs: '@media screen and (min-width:0px)',
};

export const left = css`
    text-align: left;
`;

export const center = css`
    text-align: center;
    ${mediaQueries.mobile} {
        text-align: left;
    }
`;

export const right = css`
    text-align: right;
    ${mediaQueries.mobile} {
        text-align: left;
    }
`;

export const justify = css`
    text-align: justify;
`;

export const uppercase = css`
    text-transform: uppercase;
`;

export const blend = css`
    background-color: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    filter: invert(1) grayscale(100%) contrast();
    mix-blend-mode: invert;
`;

export const vbottom = css`
    vertical-align: bottom;
`;

export const vtop = css`
    vertical-align: top;
`;

export const vmiddle = css`
    vertical-align: middle;
`;

export const lsNone = css`
    list-style:none;
`;

export const lsBullet = css`
    list-style: bullet;
`;

export const lsSquare = css`
    list-style: square;
`;

export const dsBlock = css`
    display: block;
`;

export const dsInlineBlock = css`
    display: inline-block;
`;
