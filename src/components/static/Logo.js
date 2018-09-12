import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
    const { link, title, hideText } = props;
    const logoClass = hideText ? 'logo-text sr-only' : 'logo-text inline-block';
    return (
        <a
            className="navbar-brand block"
            href={link}
        >
            <span
                className={logoClass}
            >
                {title}
            </span>
        </a>
    );
};

Logo.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    hideText: PropTypes.bool.isRequired,
}

Logo.defaultProps = {
    link: '/',
    title: 'Logo',
};

export default Logo;
