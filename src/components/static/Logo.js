import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { position, size } from 'polished';
import { mediaQueries } from 'css/variables';

const Logo = (props) => {
    const {
        link, title, logoSize, hideText, textLight,
    } = props;
    const hiddenText = hideText ? 'sr-only' : '';
    const linkColor = textLight ? 'text-white' : 'text-dark';

    const LogoCss = styled('a')`
        z-index: 1;
        ${size(logoSize)};
        position: relative;
        font-size: 24px;
        font-weight: bold;
        line-height: ${logoSize}px;
        background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
        border-radius: 50%;
        padding: 0;

        &:hover {
            color: white;
            opacity: 0.9;
        }

        ${mediaQueries.sm} {
            ${size(logoSize * 0.7)};
            line-height: ${logoSize * 0.7}px;
            font-size: 18px;
        }
    `;

    return (
        <LogoCss
            className={`navbar-brand d-block mx-auto text-center ${hiddenText} ${linkColor}`}
            href={link}
        >
            {title}
        </LogoCss>
    );
};

Logo.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    logoSize: PropTypes.number,
    hideText: PropTypes.bool,
    textLight: PropTypes.bool,
};

Logo.defaultProps = {
    link: '/',
    title: 'Logo',
    logoSize: 130,
    hideText: false,
    textLight: false,
};

export default Logo;
