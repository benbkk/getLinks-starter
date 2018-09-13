import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CarouselItem = (props) => {
    const { photo } = props;
    const Screen = styled('li')`
        background-color: ${photo.color};
        background: url(${photo.urls.full}) center no-repeat;
        background-size: cover;
        height: 500px;
    `;
    return (
        <Screen
            className="carousel-item"
        >
            <figcaption className="carousel-caption d-none d-md-block">
                <h1>{photo.user.name}</h1>
            </figcaption>
        </Screen>
    );
};

CarouselItem.propTypes = {
    photo: PropTypes.object.isRequired,
}

export default CarouselItem;
