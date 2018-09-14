import React from 'react';
import Navigation from 'components/Navigation';
import Logo from 'static/Logo';
import SearchForm from 'components/SearchForm';
import NavToggle from 'components/Navigation/NavToggle';

export default () => (
    <header className="pt-3 flex-column flex-row bd-navbar" role="navigation">
        <Logo
            title="getLinks"
            textLight
        />
        <Navigation />
        
    </header>
);
