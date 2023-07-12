import React from 'react'
import TeamMember from './TeamMember/TeamMember.js'
import './Team.css'

export default function Team() {
    return (
        <div className='Team'>
            <div className="containerBox" id="TeamBox">
                <h1>Meet my team</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <div className="TeamMembers">
                    <TeamMember name='John Deo' job='Front-end Developer' url='sources/Team/img1.jpg.webp' />
                    <TeamMember name='Martin Ju' job='UI / UX' url='sources/Team/img2.jpg.webp' />
                    <TeamMember name='Taylor Swift' job='Python Developer' url='sources/Team/img3.jpg.webp' />
                    <TeamMember name='Walter White' job='Boss' url='sources/Team/img4.jpg.webp' />
                </div>
            </div>
        </div>
    )
}
