import React, { Component } from 'react'
import './css/Page6.css'

export default class Page6 extends Component {
  render() {
    return (
      <>
          <div id='header'>
               <div className='logo'>
                    My Project Logo
               </div>
          </div>
          <div id='section'>
                    <div className='card'>
                         <img src='images/ferrari logo.png' alt='image1'></img>
                         <label>ferari</label>
                    </div>
                    <div className='card'>
                         <img src='images/lamborghini logo.jpg' alt='image2'></img>
                         <label>lamborghini</label>
                    </div>
                    <div className='card'>
                         <img src='images/porsche.png' alt='image3'></img>
                         <label>porsche</label>
                    </div>

          </div>
          <div id='footer'>Copyright @ 2025. All rights reserved.</div>

      </>
    )
  }
}