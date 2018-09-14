import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { size } from 'polished';
import { mediaQueries } from 'css/variables';

const CarouselItem = (props) => {
    const { photo } = props;

    const Screen = styled('li')`
        background-color: ${photo.color};
        background: url(${photo.urls.full}) center no-repeat;
        background-size: cover;
        min-height: calc(100vh - 200px);
    `;

    const CarouselCaption = styled('figcaption')`
        text-align: right;

    `;
    const Avatar = styled('span')`
        ${size('64px')};
        vertical-align: middle;
        ${mediaQueries.sm} {
            ${size('48px')};
        }
    `;
    const UserName = styled('h2')`
        vertical-align: middle;
        clear: right;

        small {
            font-size: 16px;
        }

        ${mediaQueries.sm} {
            font-size: 20px;
        }
    `;
    return (
        <Screen
            className="carousel-item"
        >
            <CarouselCaption className="carousel-caption">
                {photo.user.profile_image
                    ? (
                        <Avatar className="user-avatar d-inline-block mr-2">
                            <img 
                                src={photo.user.profile_image.large}
                                className="rounded-circle img-fluid"
                            />
                        </Avatar>
                    )
                    : ''
                }
                <UserName className="display-6 mb-0 d-inline-block text-left">
                    {photo.user.name}
                    {photo.user.location
                        ? <small className="d-block">{photo.user.location}</small>
                        : ''
                    }
                
                </UserName>
            </CarouselCaption>
        </Screen>
    );
};

CarouselItem.propTypes = {
    photo: PropTypes.object.isRequired,
}

export default CarouselItem;
