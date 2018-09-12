import React, { Component } from 'react';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import { getUnsplash } from './api';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
        }
    }
    async componentDidMount() {
        const photos = await getUnsplash();
        this.setState({
            photos
        })

        console.log(this.state)
    
        const myCarousel = new bsn.Carousel('#myCarousel', {});
    }

    render() {
        return (
            <section
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="7000"
            >
                
                <div className="carousel-inner" role="listbox">
                    <CarouselItem 
                        className="carousel-item"
                        title="The First Screen"
                    />
                    <CarouselItem 
                        className="carousel-item"
                        title="2nd Screen"
                    />
                    <CarouselItem 
                        className="carousel-item"
                        title="The First Screen"
                    />
                </div>
                <CarouselIndicator />
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

            </section>
        )
    }
}

export default Carousel;