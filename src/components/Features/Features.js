import React from 'react'
import FeaturesChild from './FeaturesChild/FeaturesChild'
import MonitorIcon from '@mui/icons-material/Monitor';
import AdbIcon from '@mui/icons-material/Adb';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloudIcon from '@mui/icons-material/Cloud';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import './Features.css'

export default function Features() {
    return (
        <div className='Features' id='features'>
            <div className="containerBox" id="FeaturesBox">
                <h1>Best Features</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <div id="FeaturesBoxes">
                    <div className="FeaturesBoxLeft">
                        <FeaturesChild title='Android Platform' position='end'>
                            <AdbIcon/>
                        </FeaturesChild>
                        <FeaturesChild title='Strategy Solutions' position='end'>
                            <HeadphonesIcon/>
                        </FeaturesChild>
                        <FeaturesChild title='Fully Responsive Design' position='end'>
                            <MonitorIcon/>
                        </FeaturesChild>
                    </div>
                    <div className="FeaturesBoxMiddle">
                        <img src="sources/Features/feature-screen.png.webp" />
                    </div>
                    <div className="FeaturesBoxRight">
                        <FeaturesChild title='Unlimited Features' position='start'>
                            <InsertPhotoIcon/>
                        </FeaturesChild>
                        <FeaturesChild title='Cloud Storage' position='start'>
                            <CloudIcon/>
                        </FeaturesChild>
                        <FeaturesChild title='Modern Design' position='start'>
                            <ViewInArIcon/>
                        </FeaturesChild>
                    </div>
                </div>
            </div>
        </div>
    )
}
