import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './carousel.css'


export default function Carousel(props) {
    return (
        <div className='carouselItem'>
            <div className="carouselItemTop">
                <div className="carouselItemImg">
                    <img src={props.img} />
                </div>
                <div className='carouselItemTopInfo'>
                    <h3>{props.name}</h3>
                    <span>{props.job}</span>
                    <div className='starBox'>
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                </div>
            </div>
            <div className="carouselItemBottom">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </div>
        </div>

    )
}