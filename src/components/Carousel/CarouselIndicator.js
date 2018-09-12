import React from 'react';
import 'bootstrap.native';

export default props => (
    <ol
        className="carousel-indicators"
    >
        <li
            data-title="This is React. No jQuery allowed here."
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
            data-original-title="This is React. No jQuery allowed here."
            {...props}
        />
        <li
            data-toggle="tooltip"
            data-title="This is React. No jQuery allowed here."
            data-target="#myCarousel"
            data-slide-to="1"
            data-original-title="This is React. No jQuery allowed here."
            {...props}
        />
        <li
            data-toggle="tooltip"
            data-title="This is React. No jQuery allowed here."
            data-target="#myCarousel"
            data-slide-to="2"
            data-original-title="This is React. No jQuery allowed here."
            {...props}
        />
    </ol>
);
