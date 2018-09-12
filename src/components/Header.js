import React from 'react';
import Navigation from 'components/Navigation';
import Logo from 'static/Logo';

export default () => (
    <header className="" role="navigation">
        <Logo
            title="getLinks"
            hideText={false}
        />
        <Navigation />
    </header>
);
