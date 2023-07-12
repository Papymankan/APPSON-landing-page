import React from 'react'
import './Header.css'
import Button from '../Button/Button'


export default function Header() {
    return (
        <div className='Header' id='Home'>
            <div className='containerBox' id='header-box'>
                <div className="headerLeft">
                    <h1>Perfect Landing Page
                        Best For Your App</h1>
                    <span>The Best Template For Your Mobile App To Showcase And Acquire New Customers All Around The World.The Best Template That You Can Find Anywhere!</span>
                    <Button title='Download Now' color='white'>
                    </Button>
                </div>
                <div className="headerRight">
                    <img src="sources/Navbar/slider-screen.png.webp" />
                </div>
            </div>
        </div>
    )
}
