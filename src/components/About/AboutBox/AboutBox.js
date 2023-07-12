import React from 'react'
import './AboutBox.css'
import MenuIcon from '@mui/icons-material/Menu';


export default function AboutBox(props) {
    return (
        <div className='AboutBox'>
            <div className="AboutBoxIcon">
                {props.children}
            </div>
            <div className="AboutBoxDetail">
                <h1>{props.title}.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
            </div>
        </div>
    )
}
