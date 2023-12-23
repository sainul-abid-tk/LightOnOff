
import { useState } from 'react'
import './App.css'
import lamp from './images/lamp.png'
import light from './images/light.png'
import outputOnlinegiftools from './images/output-onlinegiftools.gif'
import studying from './images/studying.png'
function App() {
  
  const[btn,setBtn]=useState(false)
  const[thank,setThank]=useState()
  setTimeout(() => {
    if(btn){
      setThank({display:'none'})
    }
    else{
      setThank({display:'block'})
    }
  }, 2500);
  return (
    <>
      <div className='main'>
          <div className="sub1">
            <div style={{width:'100%',justifyContent:'center',display:'flex',position:'relative'}}>
            <img style={{marginLeft:'20px'}} width={150} height={200} src={lamp} alt="" />
            <div style={!btn?{backgroundColor:'red'}:{backgroundColor:'green'}} className='onoff-main'>
              <button onClick={()=>setBtn(!btn)} className={!btn?'off':'on'}>{!btn?'off':'on'}</button>
            </div>
            </div>
            <div className='light' style={!btn?{opacity:'0'}:{opacity:'10'}}>
            <img width={600} height={520} src={light} alt="" />
            <img className='std' width={230} src={studying} alt="" />
            </div>
            <h1 className='turn' style={!btn?{opacity:'1'}:{opacity:'0'}}>"Please Turn on the light ‼💡"</h1>
           
           <img width={55} className='eye' style={!btn?{opacity:'1'}:{opacity:'0'}} src={outputOnlinegiftools} alt="" />
           
            <div style={thank}>
            <h1 className='thank' style={btn?{opacity:'1'}:{opacity:'0'}}>"Thank You ❤️‍🩹"</h1>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
