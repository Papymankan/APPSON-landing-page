import React , {useState , useEffect} from 'react'
import './Button.css'

export default function Button(props) {
    const [color , setColor] = useState(props.color) 
    const [title , setTitle] = useState(props.title)
    // console.log(props.children);
    const [classStyle , setClassStyle] = useState('') 
    useEffect(()=>{
        if(color == 'white'){
            setClassStyle('Button white')
        }else{
            setClassStyle('Button orange')
        }
    } , [classStyle])
  return (
    <>
        <button className={classStyle} >{title}</button>
    </>
  )
}
