import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { size, position } from 'polished';

import { mediaQueries, palette } from 'css/variables';

const CarouselItem = (props) => {
    const { photo } = props;

    const Screen = styled('figure')`
        ${size('100%')};
        background-color: ${photo.color};
        background-image: url(${photo.urls.full});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        transition: all 0.2s ease-in-out;

        &:after {
            ${position('absolute')}
            right: 0;
            bottom: 0;
            content: ''; 
            width: 100%;
            height: 100%;
            background: rgb(148,187,233);
            background: linear-gradient(146deg, rgba(148,187,233,0) 0%, rgba(123,155,193,0) 45%, rgba(0,0,0,0.861782212885154) 100%);
            z-index: 9;
            opacity: 0.8;
        }
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
        color: ${palette.white};

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
