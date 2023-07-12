import React from 'react'
import './ScreenShots.css'

export default function ScreenShots() {
  return (
    <div className='ScreenShots' id='ScreenShots'>
        <div className="containerBox" id='ScreenShots'>
            <h1>Screenshots</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
            <div className="ScreenShotsBox">
                <div className="ScreenShot">
                    <img src="sources/ScreenShots/screen1.jpg.webp"/>
                </div>
                <div className="ScreenShot">
                    <img src="sources/ScreenShots/screen2.jpg.webp"/>
                </div>
                <div className="ScreenShot">
                    <img src="sources/ScreenShots/screen3.jpg.webp"/>
                </div>
                <div className="ScreenShot">
                    <img src="sources/ScreenShots/screen1.jpg.webp"/>
                </div>
            </div>
        </div>
    </div>
  )
}
