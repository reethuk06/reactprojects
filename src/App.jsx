import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:'lightblue'}}>
      <h1>Welcome to Frontend Class KLU</h1>
      <h2>Today's topic is Introduction to React</h2>
      <h3>Today's Date is 06.08.2025</h3>
      <h4>2400032247-Reethu</h4>

      <br></br>

      <div id='section'>
                    <div className='card'>
                         <img src='images/ferrari logo.png' alt=''></img>
                         <label><Link to="/page1">Go to Page1</Link></label>
                    </div>
                    <div className='card'>
                         <img src='images/lamborghinilogojpg' alt=''></img>
                         <label><Link to="/page2">Go to Page2</Link></label>
                    </div>
                    <div className='card'>
                         <img src='images/porsche.png' alt=''></img>
                         <label><Link to="/page3">Go to Page3</Link></label>
                    </div>
                    <div className='card'>
                         <img src='images/doremon.jpg' alt=''></img>
                         <label><Link to="/page4">Go to Page4</Link></label>
                    </div>
                    <div className='card'>
                         <img src='images/sunset.jpg' alt=''></img>
                         <label><Link to="/page5">Go to Page5</Link></label>
                    </div>
                    <div className='card'>
                         <img src='images/dior.png' alt=''></img>
                         <label><Link to="/page6">Go to Page6</Link></label>
                    </div>

          </div>
      
    </div>
  )
}


export default App