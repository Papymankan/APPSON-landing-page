import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CameraIcon from '@mui/icons-material/Camera';
import DownloadIcon from '@mui/icons-material/Download';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import Divider from '@mui/material/Divider';

export default function SlideNavBar(props) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                // bgcolor: 'background.paper',
            }}
        >
            <ListItem>
                <a className='SlideNavLink' href='#Home' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <HomeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Home" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#About' onClick={props.onLinkClick} >
                    <ListItemAvatar>
                        <Avatar>
                            <InfoIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="About" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#features' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <PrecisionManufacturingIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Features" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#ScreenShots' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <CameraIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ScreenShots" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#Download' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <DownloadIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Download" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#Pricing' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <AttachMoneyIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Pricing" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#Review' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <ReviewsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Review" />
                </a>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <a className='SlideNavLink' href='#Contact' onClick={props.onLinkClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <PermContactCalendarIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Contact" />
                </a>
            </ListItem>
            
        </List>
    );
}