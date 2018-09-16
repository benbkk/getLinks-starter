import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { size } from 'polished';
import { mediaQueries } from 'css/variables';

const Logo = (props) => {
    const {
        isSticky, link, title, logoSize, hideText, textLight,
    } = props;
    const hiddenText = hideText ? 'sr-only' : '';
    const linkColor = textLight ? 'text-white' : 'text-dark';
    const stickyHeader = isSticky ? 'sticky' : '';

    const LogoCss = styled('a')`
        margin: 10px 0;
        transform: translateY(0);
        font-weight: bold;
        
        background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
        border-radius: 50%;
        padding: 0;
        transition: width 0.2s height 0.2s ease-in-out;

        &:hover {
            color: white;
            opacity: 0.9;
        }
        
        ${size(logoSize * 0.7)};
        line-height: ${logoSize * 0.7}px;
        font-size: 18px;
    

        ${mediaQueries.sm} {
            ${size(logoSize * 0.7)};
            line-height: ${logoSize * 0.7}px;
            font-size: 18px;
        }

        ${mediaQueries.md} {
            ${size(logoSize)};
            line-height: ${logoSize}px;
            font-size: 24px;
            margin-bottom: 9px;
            transform: translateY(10px);

            &.sticky {
                ${size(logoSize * 0.7)};
                line-height: ${logoSize * 0.7}px;
                font-size: 18px;
                margin-bottom: -18px;
            }
        }

        ${mediaQueries.lg} {
            ${size(logoSize)};
            line-height: ${logoSize}px;
            font-size: 24px;
            margin-bottom: -18px;

            &.sticky {
                ${size(logoSize * 0.7)};
                line-height: ${logoSize * 0.7}px;
                font-size: 18px;
                margin-bottom: -18px;
            }
        }

    `;

    return (
        <LogoCss
            className={`navbar-brand d-block mx-auto text-center ${hiddenText} ${linkColor} ${stickyHeader}`}
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
