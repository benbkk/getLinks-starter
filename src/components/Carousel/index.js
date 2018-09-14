import React, { Component } from 'react';
import styled from 'react-emotion';

import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import Loading from 'static/Loading';
import { position } from 'polished';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import getUnsplash from './api';

const Wrapper = styled('section')`
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
    height: calc(100vh - 200px);
`;

const CarouselItems = styled('div')`
    margin: 0;
    padding: 0;
    height: inherit;

    & li {
        ${position('absolute', 0)}
    }
`;

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await getUnsplash();
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const photos = await json.results;
            this.setState({
                photos,
            });
            console.log(this.state.photos);
        } catch (error) {
            return error;
        }

        bsn.Carousel('#myCarousel', {});
        bsn.Tooltip('#carouselIndicators', {});
    }

    render() {
        const { photos } = this.state;
        return (
            <Wrapper
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="7000"
            >
                {!photos
                    ? <Loading />
                    : (
                        <React.Fragment>
                            <CarouselIndicator
                                id="carouselIndicators"
                                photos={photos}
                            />
                            <CarouselItems
                                className="carousel-inner"
                                role="listbox"
                            >
                                
                                {photos.map((photo, i) => (
                                    <CarouselItem
                                        photo={photo}
                                        key={photo.id}
                                    />
  
                                ))}
                            </CarouselItems>

                            <CarouselControl
                                direction="prev"
                                label="Previous"
                                href="#myCarousel"
                                {...this.props}
                            />
                            <CarouselControl
                                direction="next"
                                label="Next"
                                href="#myCarousel"
                                {...this.props}
                            />
                        </React.Fragment>
                    )
                }
            </Wrapper>
        );
    }
}

export default Carousel;
