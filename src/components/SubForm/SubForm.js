import React from 'react'
import './SubForm.css'

export default function SubForm() {
    return (
        <div className='SubForm'>
            <div className="containerBox" id="SubFormBox">
                <h1>Subscribe to our Newsletter</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <div className='FormInputs'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="submit" value='Sign Up'/>
                </div>
            </div>
        </div>


    )
}


