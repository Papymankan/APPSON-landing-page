import React from 'react'
import './TeamMember.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function TeamMember(props) {
    const [backGround , setBackGround] = React.useState("url('" + props.url + "')")
    return (
        <div className='TeamMember' style={{backgroundImage : backGround}}>
            <div className='TeamMemberInfo'>
                <h4>{props.name}</h4>
                <span>{props.job}</span>
                <span>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm tempor incididunt ut labore et</span>
                <div className="TeamMemberSocials">
                    <FacebookIcon />
                    <TwitterIcon />
                    <TelegramIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}