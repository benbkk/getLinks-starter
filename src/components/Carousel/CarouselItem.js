import React from 'react';
import 'bootstrap.native';

export default ({ src, title, ...props }) => (
    <figure
        className="item"
        {...props}
    >
        <img
            className="d-block img-fluid"
            src={src}
            alt={title}
        />
        <figcaption className="carousel-caption">
            <h1>{title}</h1>
        </figcaption>
    </figure>
);
