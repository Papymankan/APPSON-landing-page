import React from 'react'
import AboutBox from './AboutBox/AboutBox'
import AdbIcon from '@mui/icons-material/Adb';
import MonitorIcon from '@mui/icons-material/Monitor';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import './About.css'

export default function About() {
    return (
        <>
            <div className="About" id='About'>
                <div className="containerBox" id='About-box'>
                        <div className="AboutLeft">
                            <img src="sources/About/about-m-screen.png.webp"/>
                        </div>
                        <div className="AboutRight">
                            <span>Meet Appson.</span>
                            <h2>Work the way you live</h2>
                            <p>Lorem ipsum dolor sit amet, consectetr adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            <AboutBox title='Fully Responsive Design'>
                                <MonitorIcon></MonitorIcon>
                            </AboutBox>
                            <AboutBox title='Android Platform'>
                                <AdbIcon></AdbIcon>
                            </AboutBox>
                            <AboutBox title='Strategy Solutions'>
                                <HeadphonesIcon></HeadphonesIcon>
                            </AboutBox>
                        </div>  
                </div>
            </div>
        </>
    )
}