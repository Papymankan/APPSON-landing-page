import React from 'react'
import './Blog.css'


export default function Blog(props) {
  return (
    <div className='Blog'>
        <img src={props.img}/>
        <h4>{props.title}</h4>
        <span>Lorem ipsum dolor sit amet, consectcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</span>
        <button className='ReadBtn'>Read Me</button>
    </div>
  );
}
