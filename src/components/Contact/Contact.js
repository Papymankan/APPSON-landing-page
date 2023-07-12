import React from 'react'
import './Contact.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Map from './Map/Map'

export default function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <Map/>
            <div className="containerBox" id="ContactBox">
                <div className="ContactCard">
                    <h1>Contact Us</h1>
                    <div className='FormContainer'>
                        <div className="FormAddress">
                            <h4>Address</h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</span>
                            <span>
                                <HomeIcon />
                                300 Kutubkhallpoint
                                New York,United States
                            </span>
                            <span>
                                <LocalPhoneIcon />
                                +0044 545 989 626
                            </span>
                            <span>
                                <EmailIcon />
                                Example@gmail.com
                            </span>
                        </div>
                        <div className="FormInput">
                            <h4>Get in touch</h4>
                            <input type="text" placeholder='First name'/>
                            <input type="text" placeholder='Last name'/>
                            <input type="text" placeholder='Email Address'/>
                            <input type="text" placeholder='Your message'/>
                            <button className='SendBtn'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="Social">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                    <span>Copyright ©2023 All rights reserved</span>
                </div>
            </div>
        </div>
    )
}
