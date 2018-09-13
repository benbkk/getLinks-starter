import React from 'react';
import PropTypes from 'prop-types';

const CarouselIndicator = (props) => {
    const { photos, id } = props;
    return (
        <ol
            className="carousel-indicators"
            id={id}
        >
            {photos.map((photo, i) => (
                <li
                    key={photo.id}
                    className="active"
                    data-target="#myCarousel"
                    data-slide-to={i}
                    data-toggle="tootltip"
                    data-placement="top"
                    title={photo.user.name}
                />
            ))}
        </ol>
    );
};

CarouselIndicator.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
};

export default CarouselIndicator;
