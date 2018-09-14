import React from 'react';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import GridContent from 'components/Contents';
import Footer from 'components/Footer';

export default () => (
    <React.Fragment>
        <Header />
        <Carousel />
        <GridContent />
        <Footer />
    </React.Fragment>
);
