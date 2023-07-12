import React from 'react'
import './Blogs.css'
import Blog from './Blog/Blog.js'

export default function Blogs() {
  return (
    <div className='Blogs'>
        <div className="containerBox" id="BlogsBox">
            <h1>Our Latest Blog</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
            <div className="BlogBoxes">
                <Blog title='Work For Success' img='sources/Blogs/blog-thumb1.jpg.webp'/>
                <Blog title='Work For Success' img='sources/Blogs/blog-thumb2.jpg.webp'/>
                <Blog title='Work For Success' img='sources/Blogs/blog-thumb3.jpg.webp'/>
            </div>
        </div>
    </div>
  )
}