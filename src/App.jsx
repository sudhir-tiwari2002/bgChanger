import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

const bgColor={
  red:'red',
  blue:'blue',
  green:'green',
  gray:'gray',
  black:'black'

}

function App() {
  const [count, setCount] = useState(0)
  const [color , setColor] = useState('olive')
  const [btnText , setBtnText] = useState('')

  const handleOnclick =(color)=> {
    switch (color) {
      case bgColor.blue :
        setColor('blue')
        break;

        case bgColor.gray:
        setColor('gray')
        break;

        case bgColor.red:
        setColor('red')
        break;

        case bgColor.black:
        setColor('black')
        break;

        case bgColor.green:
        setColor('green')
        break;

      default:
        setColor('olive')
        break

      
    
      
    }
    
  }
  // const handleOnclickGray =()=>{
    
  //  setColor('gray')
    
  // }
  // const handleOnclickGreen =()=>{
    
  //  setColor('green')
    
  // }
  // const handleOnclickRed =()=>{
   
  //  setColor('red')
    
  // }
  // const handleOnclickBlack =()=>{
    
  //  setColor('black')
    
  // }


  return (
    
     <div className=" m-0 p-0 w-full h-screen" style={{backgroundColor:color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <Button onclick={ () => handleOnclick(bgColor.blue)} btnText={'blue'}/>
    <Button onclick={ () => handleOnclick(bgColor.gray)}btnText={'gray'}/>
    <Button onclick={ () => handleOnclick(bgColor.green)} btnText={'green'}/>
    <Button onclick={ () => handleOnclick(bgColor.red)} btnText={'red'}/>
    <Button onclick={ () => handleOnclick(bgColor.black)} btnText={'black'}/>
    </div>
    </div>
    </div>
  
    
  )
}

export default App
