import React from 'react'
import './Review.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from './carousel/carousel'

export default function Review() {
    const [width] = React.useState(window.innerWidth)
    return (
        <div className='Review' id='Review'>
            <div className="containerBox" id="ReviewBox">
                <h1>Testimonial</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <OwlCarousel items={width > 840 ? (2) : (1)}
                    className="owl-theme"
                    loop
                    margin={30} 
                    autoplay={true}
>
                        <Carousel name='John Deo' job='Front-end developer' img='sources/Carousel/author1.jpg.webp'/>
                        <Carousel name='Ariana Grande' job='UI / UX' img='sources/Carousel/author2.jpg.webp'/>
                        <Carousel name='Eminem' job='Back-end developer' img='sources/Carousel/author1.jpg.webp'/>
                </OwlCarousel>
            </div>
        </div>
    )
}
