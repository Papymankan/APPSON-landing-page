import React from 'react'
import Button from '../Button/Button'
import './Download.css'

export default function Download() {
    return (
        <div className='Download' id='Download'>
            <div className="containerBox" id='DownloadBox'>
                <h1>Download Appson</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <div className="DownloadBtns">
                    <Button color='white' title='Andriod story'></Button>
                    <Button color='white' title='Apple story'></Button>
                    <Button color='white' title='Windows story'></Button>
                </div>
            </div>
        </div>
    )
}
