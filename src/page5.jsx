import React, { Component } from 'react'
import'./css/Page5.css'
export default class Page5 extends Component {
  render() {
    return (
      <div>
        <header>
            <div className='logo'>Sliding Page-Slide{index}</div>
        </header>
        <section>
            <div className='slider'>
                <div className='slides'id="slideRef">
                    <div className='slide s1'></div>
                     <div className='slide s2'></div>
                      <div className='slide s3'></div>
                </div>
            </div>
        </section>
        <footer>
            Copyright @ 2025.All rights reserved
        </footer>
      </div>
    )
  }
}