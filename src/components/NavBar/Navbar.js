import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SlideNavBar from './SlideNavBar/SlideNavBar';

export default function NavbarLists() {
    const [colorChange, setColorchange] = React.useState(false);
    const [navSlide , setNavSlide] = React.useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);

    const slideNavbar = ()=>{
        let navbar = document.getElementsByClassName('navBarSlide')[0]
        console.log('clicked');
        if(navSlide){
            navbar.style.left = '-300px'
            setNavSlide(false)
        }else{
            navbar.style.left = '0'
            setNavSlide(true)
        }
    }


    return (
        <>
            <Navbar id='Navbar' className={colorChange ? 'fixed' : ''} data-bs-theme="dark">
                <div className='containerBox' id='NavbarBox'>
                    <Navbar.Brand href="#home"><img src="sources/Navbar/logo.png.webp" /></Navbar.Brand>
                    <div className="navBarNav">
                        <Nav>
                            <Nav.Link href="#Home" >Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#ScreenShots">ScreenShots</Nav.Link>
                            <Nav.Link href="#Download">Download</Nav.Link>
                            <Nav.Link href="#Pricing">Pricing</Nav.Link>
                            <Nav.Link href="#Review">Review</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </div>

                    <IconButton id='navToggle' onClick={slideNavbar}>
                        {!navSlide ? (<MenuIcon />) : (<CloseIcon />)}
                    </IconButton>
                </div>
            </Navbar>

            <div className="navBarSlide">
                <SlideNavBar onLinkClick={slideNavbar}/>
            </div>
        </>
    )
}
