import React from 'react'
import './FeaturesChild.css'
import MonitorIcon from '@mui/icons-material/Monitor';

export default function FeaturesChild(props) {
    const [position , setPosition] = React.useState(props.position)
    return (
        <div className='FeaturesChild' style={{textAlign: position }}>
            <div className='FeaturesIcon'>
                {props.children}
            </div>
            <div className='FeaturesDetail'>
                <h3>{props.title}</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</span>
            </div>
        </div>
    )
}
