import React from 'react';
import styled from 'react-emotion';

import Header from 'components/Header';
import Carousel from 'components/Carousel';
import GridContent from 'components/Contents';
import Footer from 'components/Footer';

export default () => {
    const Main = styled('main')`
        min-height: 100vh;
    `;
    return (
        <React.Fragment>
            <Header />
            <Main>
                <Carousel />
                <GridContent />
            </Main>
            <Footer />
        </React.Fragment>
    );
};
