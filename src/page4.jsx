import React, { Component } from 'react'
import'./css/Page4.css'
export default class Page4 extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
                <div className="logo">My Website</div>
                <ul id="navlist">
                  <li>home</li>
                  <li>about</li>
                  <il>Services</il>
                  <il>contact</il>
                </ul>
                <div className="menu"onClick={()=>this.menuClick()}>&#9776;</div>
            </nav>
            </header>
            <section>
               <h1> Welcome to Response WebPage</h1>
               <p> This is an example page which can adopt any screen size</p>
            </section>
            <footer>
                   Copyright @ 2025.All rights reserved
            </footer>
      </div>
    )
  }
}