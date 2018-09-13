import React, { Component } from 'react';
import styled from 'react-emotion';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import Loading from 'static/Loading';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import getUnsplash from './api';

const Wrapper = styled('section')`
    background: #808080;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3fada8, #808080);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3fada8, #808080); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const CarouselItems = styled('ul')`
    margin: 0;
    padding: 0;
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
            const photos = json.results;
            this.setState({
                photos,
            });
        } catch (error) {
            console.error(error);
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
                                role="listbox">
                                {photos.map((photo, i) => (
                                    <CarouselItem
                                        key={photo.id}
                                        photo={photo}
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
