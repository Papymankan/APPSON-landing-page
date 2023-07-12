import React from 'react'
import './Numbers.css'
import Achives from './Achives/Achives'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Numbers() {
    return (
        <div className='Numbers'>
            <div className="containerBox" id='NumbersBox'>
                <Achives title='Download' number='20K'>
                    <CloudDownloadIcon />
                </Achives>
                <Achives title='Happy Clients' number='5K'>
                    <FavoriteIcon />
                </Achives>
                <Achives title='Coffee Cups' number='30K'>
                    <LocalCafeIcon />
                </Achives>
                <Achives title='Award' number='50'>
                    <EmojiEventsIcon />
                </Achives>
            </div>
        </div>
    )
}
